const {default:axios} = require('axios');
const target = "https://raw.githubusercontent.com/iziming/FreeSSR/master/freenodeplain.txt";

module.exports = function(){
  return axios.get(target)
  .then(async response => {
    const text = response.data;
    const reg = /ssr:\/\/.+\n/g;
    const result = text.match(reg);
    return result;
  })
}