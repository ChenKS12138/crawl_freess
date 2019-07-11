const koa = require('koa2');
const crawl = require('./utils/crawl');
const string2base64 = require('./utils/string2base64');

const app = new koa();
app.use(async ctx => {
  let data = await crawl();
  ctx.set("Content-Type", "text/plain;charset=utf-8");
  data = string2base64(data.join("\n"));
  ctx.body = data;
} )
app.listen(3001);