const {default:axios} = require('axios');
const {ssrGenerator} = require('../utils/parser');
const target = "https://www.youneed.win/free-ss";

const reg1 = rawString => rawString.match(/<tr>\n(<td align="center">[^\<]+<\/td>\n)+<\/tr>/g);

const reg2 = rawString => rawString.match(/<td align="center">[^\<]+<\/td>/g);

const generator = ([ip,port,password,method,time,country]) => ssrGenerator({ip,port,password,method});

module.exports = function(){
  return axios.get(target)
  .then(async ({data}) => reg1(data).map(item => generator(reg2(item).map(item => item.slice(19,-5)))));
}