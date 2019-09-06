import BaseCrawler from '../common/BaseCrawler';
import {REG_6 } from '../common/CommonReg';
import { AFTERREG_3 } from '../common/CommonAfterReg';
import { COMMON_PREREG1} from '../common/CommonPreReg';

class Crawler6 extends BaseCrawler {
  reg = REG_6;
  afterReg = AFTERREG_3;
  preReg = COMMON_PREREG1;
  constructor(url: string) {
    super(url, 'get');
  }
}

const target = [
  // 'https://bihai.ml/free/ssr/',
  'https://qiaomenzhuanfx.netlify.com/'
];

target.forEach(url => new Crawler6(url));