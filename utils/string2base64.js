module.exports = function(raw){
  return Buffer.from(raw).toString('base64');
}