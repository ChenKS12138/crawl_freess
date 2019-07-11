/**
 * 这个网站有反爬措施，难爬
 */
const {default:axios} = require('axios');
const target = "https://shadowsocks-share.herokuapp.com/"

module.exports = function(){
  return axios.get(target)
  .then(async response => {
    const text = response.data;
    const reg = /ssr:\/\/.+\n/g;
    const result = text.match(reg);
    return result;
  })
}