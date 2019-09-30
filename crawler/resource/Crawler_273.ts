import BaseCrawler from '../common/BaseCrawler';
import {REG_7 } from '../common/CommonReg';
import { AFTERREG_3 } from '../common/CommonAfterReg';
import { COMMON_PREREG2} from '../common/CommonPreReg';

class Crawler6 extends BaseCrawler {
  reg = REG_7;
  afterReg = AFTERREG_3;
  preReg = COMMON_PREREG2;
  constructor(url: string) {
    super(url, 'get');
  }
}

const target = [
  'https://www.liesauer.net/yogurt/subscribe?ACCESS_TOKEN=DAYxR3mMaZAsaqUb'
];

target.forEach(url => new Crawler6(url));