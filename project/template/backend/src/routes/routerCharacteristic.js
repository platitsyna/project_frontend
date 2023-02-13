const Router = require('@koa/router');
const characteristic = require('../sequelize/models/Characteristic');
const model = characteristic.model;

const router = new Router();
characteristic.start();

router.get('/', async (ctx, next) => {
  const charactericticList = await model.findAll();
  ctx.body = charactericticList;
});

router.post('/', async (ctx, next) => {
  const characterictic = await model.create(ctx.request.body);
  ctx.body = characterictic.id;
});

router.get('/:id', async (ctx, next) => {
  const id = ctx.params.id;
  const characterictic = await model.findByPk(id);
  ctx.body = characterictic;
});

router.put('/:id', async (ctx, next) => {
  const { id, ...body } = ctx.request.body;
  const characterictic = await model.update(body, { where: { id: id } });
  ctx.body = characterictic;
});

router.delete('/:id', async (ctx, next) => {
  const id = ctx.params.id;
  await model.destroy({ where: { id: id } });
  ctx.body = {};
});

module.exports = router;
