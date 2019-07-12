const koa = require('koa2');
const crawl = require('./crawler/crawl_ssr4');
const string2base64 = require('./utils/string2base64');
const ss2ssr = require('./utils/ss2ssr');
const koaRouter = require('koa-router');
const exec = require('child_process').exec;

const router = new koaRouter();
router.get('/',async ctx => {
  let data = await crawl();
  ctx.body = string2base64(data.join("\n"));
});
router.post('/deploy',async ctx => {
  const result = await new Promise((resolve,reject) => {
    exec('./deploy.sh',function(err,res){
      if(err){
        reject(err);
      }
      else{
        resolve(res);
      }
    })
  })
  ctx.body=result;
})
const app = new koa();
app.use(router.routes());
app.listen(3001);