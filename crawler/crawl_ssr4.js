const {default:axios} = require('axios')
const target = "http://nulastudio.org/Freedom/";

module.exports = function(){
  return axios.get(target)
  .then(async response => {
    const text = response.data;
    const reg = /"ssr:\/\/.+"/g;
    const result = text.match(reg).map(item => item.slice(1,-1));
    return result;
  })
}