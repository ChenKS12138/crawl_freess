const {default:axios} = require('axios')
const target = "https://www.youneed.win/free-ssr";

module.exports = function(){
  return axios.get(target)
  .then(async response => {
    const text = response.data;
    const reg = /"ssr:\/\/.+"/g;
    const result = text.match(reg).map(item => item.slice(1,-1));
    return result;
  })
  .catch(() => [])
}