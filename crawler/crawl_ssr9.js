/**
 * 似乎有反爬虫，后面再研究一下
 */

const {default:axios} = require('axios')
const target = "https://www.ssrtool.com/tool/api/free_ssr?page=1&limit=90";

module.exports = function(){
  return axios.get(target)
  .then(async response => {
    const text = response.data;
    const reg = /"ssr:\/\/.+"/g;
    const result = text.match(reg).map(item => item.slice(1,-1));
    return result;
  })
}