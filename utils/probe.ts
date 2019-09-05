import tipp from 'tcp-ping';
import commonObj from './interface/commonObj';
import pingResult from './interface/pingResult';

export default function (ssrObject:commonObj,timeout:number=1500):Promise<pingResult> {
  const {ip,port} = ssrObject;
  return new Promise((resolve,reject) => {
    tipp.ping({address:ip,port,timeout,attempts:1},(err,res) => {
      if(err){
        reject(err);
      }
      else{
        const {avg} = res;
        const access = Number.isNaN(avg) ? false :true;
        resolve({avg,access});
      }
    })
  })
}