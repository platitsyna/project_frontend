const Router = require('@koa/router');
const object = require('../sequelize/models/Object');
const model = object.model;
const estimation = require('../sequelize/models/Estimation');
const estimatinModel = estimation.model;
const characteristic = require('../sequelize/models/Characteristic');
const { Op } = require('sequelize');
const characteristicModel = characteristic.model;

model.belongsToMany(characteristicModel, { through: 'ObjectCharacteristic' });
characteristicModel.belongsToMany(model, { through: 'ObjectCharacteristic' });

const router = new Router();
object.start();
estimation.start();
characteristic.start();

router.get('/', async (ctx, next) => {
  const objectList = await model.findAll();
  ctx.body = objectList;
});

router.post('/', async (ctx, next) => {
  const object = await model.create(ctx.request.body);
  ctx.body = object.id;
});

router.get('/:id', async (ctx, next) => {
  const id = ctx.params.id;
  const object = await model.findByPk(id);
  ctx.body = object;
});

router.put('/:id', async (ctx, next) => {
  const { id, ...body } = ctx.request.body;
  const object = await model.update(body, { where: { id: id } });
  ctx.body = object;
});

router.delete('/:id', async (ctx, next) => {
  const id = ctx.params.id;
  await model.destroy({ where: { id: id } });
  ctx.body = {};
});

router.get('/:id/characteristics', async (ctx, next) => {
  const id = ctx.params.id;
  await model.findOne({ where: { id: id } }).then((object) => {
    object.getCharacteristicModel().then((characteristics) => {
      ctx.body = characteristics;
    });
  });
});

router.post('/:id/characteristics', async (ctx, next) => {
  const { id, ...body } = ctx.request.body;
  characteristicModel.findOne({ where: { id: body } }).then((characteristic) => {
    model.addCharacteristicModel(characteristic, { through: { id: id } });
  });
});

router.get('/:id/characteristics/:characteristic_id', async (ctx, next) => {
  const id = ctx.params.id;
  const characteristic = ctx.params.characteristic_id;
  const list = await estimatinModel.findAll({
    where: {
      [Op.and]: [{ object: id }, { characteristic: characteristic }],
    },
  });
  ctx.body = list;
});

router.post('/:id/characteristics/:characteristic_id', async (ctx, next) => {
  const id = ctx.params.id;
  const characteristic = ctx.params.characteristic_id;
  await estimatinModel.create(id, characteristic, ctx.request.body);
  ctx.body = id;
});

router.delete('/:id/characteristics/:characteristic_id', async (ctx, next) => {
  const id = ctx.params.id;
  const characteristic = ctx.params.characteristic_id;
  const list = await estimatinModel.destroy({
    where: {
      [Op.and]: [{ object: id }, { characteristic: characteristic }],
    },
  });
  ctx.body = list;
});

router.get('/:id/characteristics/:characteristic_id/average', async (ctx, next) => {
  const id = ctx.params.id;
  const characteristic = ctx.params.characteristic_id;
  const list = await estimatinModel.findAll({
    where: {
      [Op.and]: [{ object: id }, { characteristic: characteristic }],
    },
  });
  let sum = 0;
  list.forEach((elem) => (sum = sum + elem.value));
  ctx.body = sum / list.length;
});

module.exports = router;
