import BaseCrawler from '../crawler/common/BaseCrawler';
import * as PRE_REG from '../crawler/common/CommonPreReg';
import * as REG from '../crawler/common/CommonReg';
import * as AFTER_REG from '../crawler/common/CommonAfterReg';

// const preReg = PRE_REG.COMMON_PREREG1;
const reg = REG.REG_1;
const preReg = PRE_REG.COMMON_PREREG1;
const afterReg = AFTER_REG.AFTERREG_3;
// const afterReg = AFTER_REG.AFTERREG_2;
const url = 'https://raw.githubusercontent.com/BeanWei/freeSSR/master/README.md';

BaseCrawler.RunTest(url, 'get',reg,afterReg)
  .then(response => {
    console.log(response);
  });

