const tipp = require('tcp-ping');

const probe = (ssrObject,timeout=1500) => {
  const {ip,port} = ssrObject;
  // return new Promise((resolve,reject) => {
  //   tipp.probe(ip,port,(err,res) => {
  //     if(err){
  //       reject(err)
  //     }
  //     else{
  //       resolve(res);
  //     }
  //   })
  // })
  return new Promise((resolve,reject) => {
    tipp.ping({address:ip,port,timeout,attempts:1},(err,res) => {
      if(err){
        reject(err);
      }
      else{
        const {avg} = res;
        const ojbk = isNaN(avg) ? false :true;
        resolve({avg,ojbk});
      }
    })
  })
}

module.exports = probe;