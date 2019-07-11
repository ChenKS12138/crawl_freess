const {default:axios} = require('axios');
const buffer2string = require('./buffer2string');
const target = "https://show.freess.info/";

module.exports = function () {
  return axios.get(target)
    .then(async response => {
      const text = response.data;
      const reg = /data:image.+" /g;
      const result = text.match(reg)
        .map(item => item.slice(22,-2))
        .map(item => new Buffer(item,'base64'));
      const links = await Promise.all(result.map(item => buffer2string(item)));
      return links;
    })
}