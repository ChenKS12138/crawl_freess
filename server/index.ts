import koa from 'koa';
import BaseController from './controller/common/BaseController';
import config from './config';
import './controller/Serve';
import './controller/Deploy';

const router = BaseController.Mapper.routes();
const app: koa = new koa();
app.use(router);
app.listen(config.port);