import BaseController from './common/BaseController';
import { exec } from 'child_process';
import { Context } from 'koa';

class Deploy extends BaseController{

  @BaseController.POST('/deploy')
  async deploy(ctx:Context) {
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
  }
}