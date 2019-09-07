import BaseCrawler from '../crawler/common/BaseCrawler';
import * as PRE_REG from '../crawler/common/CommonPreReg';
import * as REG from '../crawler/common/CommonReg';
import * as AFTER_REG from '../crawler/common/CommonAfterReg';

// const preReg = PRE_REG.COMMON_PREREG1;
const reg = /https:\/\/[^\s]+\.PNG/ig;
// const afterReg = AFTER_REG.AFTERREG_2;
const url = 'https://github.com/Alvin9999/new-pac/wiki/ss%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7';

BaseCrawler.RunTest(url, 'get',reg)
  .then(response => {
    console.log(response);
  });

