const {default:axios} = require('axios');
const target = "https://raw.githubusercontent.com/voken100g/AutoSSR/master/online";
const base642string = require('../utils/base642string');

module.exports = function(){
  return axios.get(target)
    .then(async response => {
      const text = base642string(response.data);
      const reg = /ssr:\/\/.+\n/g;
      const result = text.match(reg).map(item => item.slice(0,-2));
      return result;
    })
    .catch(() => [])
}