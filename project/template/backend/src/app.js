require('module-alias/register');
const Koa = require('koa');
const router = require('../src/routes');
const koaBody = require('koa-body');
const session = require('koa-session');
const passport = require('koa-passport');
const connect = require('../src/sequelize/connect');

connect.start();
const app = new Koa();
app.use(koaBody());
app.keys = ['secretAppLogin'];

app.use(session({}, app));

require('../src/auth');
app.use(passport.initialize());
app.use(passport.session());

app.use(async (ctx, next) => {
  console.log('>>>> IN'); // eslint-disable-line no-console
  await next();
  console.log('<<<< OUT'); // eslint-disable-line no-console
});

app.use(router.routes(koaBody));
app.use(router.allowedMethods());

app.listen(3000, () => {});
