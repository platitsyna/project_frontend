require('module-alias');
const Router = require('@koa/router');
const User = require('../routes/routerUser');
const Object = require('../routes/routerObject');
const Characteristic = require('../routes/routerCharacteristic');
const router = new Router();

router.use('/users', User.routes());
router.use('/objects', Object.routes());
router.use('/characteristics', Characteristic.routes());
module.exports = router;
