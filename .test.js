// const {default:axios} = require('axios');

// axios.get('https://www.youneed.win/free-ss')
// .then(res => {
//   console.log(res.data);
// })

// const reg1 = /<tr>\n(<td align="center">[^\<]+<\/td>\n)+<\/tr>/g;
// const reg2 = /<td align="center">[^\<]+<\/td>/g;
// const fs = require('fs');
// const text = fs.readFileSync('./1.txt').toString();
// console.log(text.match(reg1)[0].match(reg2)[1].slice(19,-5));

const crawl = require('./crawler/crawl_ssr11');
crawl().then(res => console.log(res))