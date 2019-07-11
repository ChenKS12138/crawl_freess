const koa = require('koa2');
const crawl = require('./crawler/crawl_ssr4');
const string2base64 = require('./utils/string2base64');
const ss2ssr = require('./utils/ss2ssr');

const app = new koa();

app.use(async ctx => {
  let data = await crawl();
  ctx.body = string2base64(data.join("\n"));
} )
app.listen(3001);