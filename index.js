const koa = require('koa2');
const crawler = require('./crawler/index');
const {MySsr} = require('./utils/storager');
const string2base64 = require('./utils/string2base64');
const koaRouter = require('koa-router');
const exec = require('child_process').exec;


const storage = new MySsr();

const update = async () => {
  const response = await crawler();
  storage.append(response);
}

update();
setInterval(update,3600000);


const router = new koaRouter();
router.get('/',async ctx => {
  const data = storage.extract();
  ctx.body = string2base64(data.join("\n"));
});
router.get('/info',async ctx => {
  const response = {
    all:storage.allCount,
    available:storage.count
  }
  ctx.body = JSON.stringify(response);
})
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