module.exports = function(base64){
  return Buffer.from(base64,'base64').toString('utf8');
}