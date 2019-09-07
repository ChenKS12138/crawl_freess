import BaseCrawler from '../common/BaseCrawler';
import { AFTERREG_2 } from '../common/CommonAfterReg';
import { REG_2 } from '../common/CommonReg';

class Crawler2 extends BaseCrawler {
  afterReg = AFTERREG_2;
  reg = REG_2;
  constructor(url:string) {
    super(url, 'get');
  }
}

const target = [
  'http://nulastudio.org/Freedom/'
]

target.forEach(url => new Crawler2(url));