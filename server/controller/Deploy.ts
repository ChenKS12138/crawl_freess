import BaseController from './common/BaseController';
import { exec } from 'child_process';
import { Context } from 'koa';

class Deploy extends BaseController{

  @BaseController.POST('/deploy')
  public static async deploy(ctx:Context) {
    const result = await new Promise((resolve, reject) => {
      exec('./deploy.sh', function (err, res) {
        if (err) {
          reject(err);
        }
        else {
          resolve(res);
        }
      })
    });
    console.log(result);
    ctx.body=result;
  }
}