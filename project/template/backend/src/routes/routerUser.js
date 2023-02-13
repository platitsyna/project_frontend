const Router = require('@koa/router');
const user = require('../sequelize/models/User');
const model = user.model;
const passport = require('koa-passport');
const koaBody = require('koa-body');

const router = new Router();
user.start();

router.get('/', async (ctx, next) => {
  const users = await model.findAll();
  console.log(users);
  ctx.body = users;
});

router.post('/register', koaBody(), async (ctx, next) => {
  const user = await model.create(ctx.request.body);
  ctx.body = user.id;
});

router.get('/profile', async (ctx, next) => {
  const id = ctx.request.body;
  const usersList = await model.findByPk(id);
  ctx.body = usersList;
});

router.get('/:id', async (ctx, next) => {
  const id = ctx.params.id;
  const user = await model.findByPk(id);
  ctx.body = user;
});

router.put('/:id', async (ctx, next) => {
  const { id, ...body } = ctx.request.body;
  const user = await model.update(body, { where: { id: id } });
  ctx.body = user;
});

router.delete('/:id', async (ctx, next) => {
  const id = ctx.params.id;
  await model.destroy({ where: { id: id } });
  ctx.body = {};
});

router.post('/login', passport.authenticate('local'), async (ctx, next) => {
  ctx.body = 'login';
});

module.exports = router;
