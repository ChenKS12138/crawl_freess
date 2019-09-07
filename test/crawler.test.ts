import Crawler from '../crawler/index';
import assert from 'assert';
Crawler.RunTest()
  .then(response => {
    console.log(`Crawl data size: ${response.length}`);
    response.forEach(item => {
      // the RexExp could not be right ,it can't match `\n`
      assert(/^ssr:\/\/.+$/.test(item),`${item} didn't conform to the format \`ssr://\` `);
    })
  });