// const crawl = require('./crawler/crawl_ssr4');
// const crawl2 = require('./crawler/crawl_ssr5');
// const crawl3 = require('./crawler/crawl_ssr6');
// const crawl4 = require('./crawler/crawl_ssr7');
// const crawl5 = require('./crawler/crawl_ssr8');

// (async() => {
//   const response = await Promise.all([crawl(),crawl2(),crawl3(),crawl4(),crawl5()]);
//   const urls = response[0].contact(response[1]).contact(response[2]).contact(response[3]).contact(response[``])
// })()


const a=[[1,2,3],[4,5,6]];
const b = a.reduce((sum,item) => sum.concat(item),[]);
console.log(b);