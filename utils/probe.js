const tipp = require('tcp-ping');

const probe = (ssrObject) => {
  const {ip,port} = ssrObject;
  return new Promise((resolve,reject) => {
    tipp.probe(ip,port,(err,res) => {
      if(err){
        reject(err)
      }
      else{
        resolve(res);
      }
    })
  })
}

module.exports = probe;