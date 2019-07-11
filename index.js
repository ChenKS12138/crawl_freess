const koa = require('koa2');
const crawl = require('./utils/crawl');
const app = new koa();
app.use(async ctx => {
  const data = await crawl();
  ctx.set("Content-Type", "application/json");
  const response = {
    success:true,
    errMsg:null,
    data
  }
  ctx.body = JSON.stringify(response)
} )
app.listen(8084);