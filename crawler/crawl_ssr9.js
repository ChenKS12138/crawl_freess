/**
 * 似乎有反爬虫，后面再研究一下
 */

const {default:axios} = require('axios')
const target = "https://www.ssrtool.com/tool/api/free_ssr?page=1&limit=90";

module.exports = function(){
  return axios.get(target,{
    headers:{
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "zh-CN,zh;q=0.9",
      "cookie": "_ga=GA1.2.331264778.1562929338; __cfduid=dc6c53d588e7b69c6dad300bc7104163d1563158468; JSESSIONID=931EBB37C5919F95C986758EC83C8D0D; _gid=GA1.2.1652496775.1563267331",
      "referer": "https://www.ssrtool.com/tool/free_ssr",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36",
      "x-requested-with": "XMLHttpRequest"
    }
  })
  .then(async response => {
    const text = response.data;
    const reg = /"ssr:\/\/.+"/g;
    const result = text.match(reg).map(item => item.slice(1,-1));
    return result;
  })
}