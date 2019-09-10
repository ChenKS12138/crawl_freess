import tipp from 'tcp-ping';
import commonObj from './interface/commonObj';
import pingResult from './interface/pingResult';

export default class Probe {
  private static ping(ssrObject:commonObj,timeout:number = 1500):Promise<pingResult> {
    const { ip, port } = ssrObject;
    return new Promise((resolve,reject) => {
      tipp.ping({address:ip,port,timeout,attempts:1},(err,res) => {
        if(err){
          reject(err);
        }
        else{
          const {avg} = res;
          const access = Number.isNaN(avg) ? false :true;
          resolve({avg,access,url:ssrObject.url});
        }
      })
    })
  }
  public static async pingAll(ssrObjectArray: Array<commonObj>):Promise< Array<pingResult> > {
    const response:Array<pingResult> = await Promise.all(ssrObjectArray.map(ssrObject => {
      return new Promise(async resolve => {
        const pingResponse = await Probe.ping(ssrObject);
        resolve(pingResponse);
      })
    }));
    return response;
  }
}