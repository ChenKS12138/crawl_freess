const decodeImage = require('jimp').read;
const QrCode = require('qrcode-reader');
module.exports = function(buffer){
  return new Promise((resolve,reject) => {
    decodeImage(buffer,function(err,image){
      if(err) reject(err);
      const qr = new QrCode();
      qr.callback = function(err,value){
        if(err) reject(err);
        resolve(value.result);
      }
      qr.decode(image.bitmap);
    })
  })
}