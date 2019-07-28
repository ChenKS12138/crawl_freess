const crawl1 = require('./crawl_ssr4');
const crawl2 = require('./crawl_ssr5');
const crawl3 = require('./crawl_ssr6');
const crawl4 = require('./crawl_ssr7');
const crawl5 = require('./crawl_ssr8');
const crawl6 = require('./crawl_ssr2');
const crawl7 = require('./crawl_ssr');
const crawl8 = require('./crawl_ssr10');
const crawl9 = require('./crawl_ssr11');
const crawl10 = require('./crawl_ssr13');
const crawl11 = require('./crawl_ssr14');
const crawl12 = require('./crawl_ssr15');
const crawl13 = require('./crawl_ssr16');
const crawl14 = require('./crawl_ssr17');

const crawler = async () => {
  const response = await Promise.all([crawl1(),crawl2(),crawl3(),crawl4(),crawl5(),crawl6(),crawl7(),crawl8(),crawl9(),crawl10(),crawl11(),crawl12(),crawl13(),crawl14()]);
  const data = response.reduce((sum,item) => sum.concat(item) ,[]);
  return data;
}

module.exports = crawler;