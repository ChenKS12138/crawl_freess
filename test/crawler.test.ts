import Crawler from '../crawler/index';
import assert from 'assert';

const expectReg = /^ssr:\/\/.+$/;

Crawler.RunTest()
  .then(response => {
    // console.log(`Crawl data size: ${response.length}`);
    response.forEach((item,index) => {

      // the RexExp could not be right ,it can't match `\n`
      assert(expectReg.test(item), `${item} \n Didn't Conform To The Format \`${expectReg.source}\` \n\n Terminate At ${index+1}/${response.length}`);
    })
    return response;
  })
  .then(response => {
    console.log(`\n\n\x1B[42m\x1B[30mSUCCESS\x1B[0m \x1B[32m ${response.length} SSR Address matches ${expectReg.source}\x1B[0m \n\n`)
  })
  .catch((execption: Error) => {
    console.log(`\n\n\x1B[41mERROR\x1B[0m \x1B[31m${execption.message}\x1B[0m\n\n`);
  })