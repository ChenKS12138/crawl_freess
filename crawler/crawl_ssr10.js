const {default:axios} = require('axios');
const target = "https://www.liesauer.net/yogurt/subscribe?ACCESS_TOKEN=DAYxR3mMaZAsaqUb";
const base642string = require('../utils/base642string');

module.exports = function(){
  return axios.get(target,{
    headers:{
      "Host":"www.liesauer.net",
      "Upgrade-Insecure-Requests":"1",
      "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
    }
  })
    .then(async response => {
      const text = base642string(response.data);
      const reg = /ssr:\/\/.+\r/g;
      const result = text.match(reg).map(item => item.slice(0,-2));
      return result;
    })
}