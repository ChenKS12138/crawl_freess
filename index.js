const koa = require('koa2');
const crawl = require('./crawler/crawl_ssr4');
const crawl2 = require('./crawler/crawl_ssr5');
const crawl3 = require('./crawler/crawl_ssr6');
const crawl4 = require('./crawler/crawl_ssr7');
const crawl5 = require('./crawler/crawl_ssr8');
const string2base64 = require('./utils/string2base64');
const koaRouter = require('koa-router');
const exec = require('child_process').exec;
/** 
 * 所有的crawl统一返回一个可以返回ssr地址数组的Promise
*/
const router = new koaRouter();
router.get('/',async ctx => {
  const response = await Promise.all([crawl(),crawl2(),crawl3(),crawl4(),crawl5()]);
  const data = [...response[0],...response[1]];
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