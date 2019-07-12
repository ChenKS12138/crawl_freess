const {default:axios} = require('axios');
const target = "https://raw.githubusercontent.com/ssrsub/ssr/master/ssrsub";
const base642string = require('../utils/base642string');

module.exports = function(){
  return axios.get(target)
    .then(async respone => {
      const text = base642string(respone.data);
      const reg = /ssr:\/\/.+\n/g;
      const result = text.match(reg).map(item => item.slice(0,-2));
      return result;
    })
}