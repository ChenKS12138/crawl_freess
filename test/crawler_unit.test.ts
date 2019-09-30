import BaseCrawler from '../crawler/common/BaseCrawler';
import * as PRE_REG from '../crawler/common/CommonPreReg';
import * as REG from '../crawler/common/CommonReg';
import * as AFTER_REG from '../crawler/common/CommonAfterReg';

const url = 'https://t.me/s/v2list';

BaseCrawler.RunTest(url, 'get')
  .then(response => {
    console.log(response);
  });

