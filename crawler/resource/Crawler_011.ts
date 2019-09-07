import BaseCrawler from '../common/BaseCrawler';
import { AFTERREG_1 } from '../common/CommonAfterReg';
import { REG_1 } from '../common/CommonReg';

class Crawler1 extends BaseCrawler {
  afterReg = AFTERREG_1;
  reg = REG_1;
  constructor(url:string) {
    super(url, 'get');
  }
}

const target = [
  'https://raw.githubusercontent.com/BeanWei/freeSSR/master/README.md'
]

target.forEach(url => new Crawler1(url));