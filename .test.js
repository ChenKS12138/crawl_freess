// const hosts=[
//   {
//     ip:'23.239.20.120',
//     // port:8097
//     port:8888
//   },
//   {
//     ip:'54.92.86.43',
//     port:14139
//   },
//   {
//     ip:'188.119.64.20',
//     port:48887
//   }
// ]



// const probe = require('./utils/probe');
// const crawler = require('./crawler/index');
// const tcpp = require('tcp-ping');

// hosts.forEach(async item => {
//   const ojbk = await probe(item);
//   console.log(ojbk);
// })
// // probe(hosts[0]).then(res => console.log(res))

// // tcpp.ping({})

require('./crawler/crawl_ssr10')().then(res => console.log(res))