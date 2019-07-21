const {default:axios} = require('axios');
const target = "https://heikejilaila.xyz/keji.php?id=22c7b9fdda20bb7405b270cd75971f66";
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