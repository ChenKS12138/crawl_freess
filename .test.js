const crawl = require('./crawler/crawl_ssr');
crawl()
.then(res=> console.log(res))