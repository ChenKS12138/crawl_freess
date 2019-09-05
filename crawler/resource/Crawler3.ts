import BaseCrawler from '../common/BaseCrawler';
import { AFTERREG_3 } from '../common/CommonAfterReg';
import { REG_1 } from '../common/CommonReg';
import {COMMON_PREREG1} from '../common/CommonPreReg'

class Crawler3 extends BaseCrawler {
  afterReg = AFTERREG_3;
  reg = REG_1;
  preReg = COMMON_PREREG1;
  constructor(url: string) {
    super(url, 'get');
  }
}

const target = [
  'https://raw.githubusercontent.com/ImLaoD/sub/master/ssrshare.com',
  'https://raw.githubusercontent.com/ssrsub/ssr/master/ssrsub',
  'https://raw.githubusercontent.com/AmazingDM/sub/master/ssrshare.com',
  'https://yzzz.ml/freessr/',
  'https://raw.githubusercontent.com/voken100g/AutoSSR/master/online',
  'https://raw.githubusercontent.com/voken100g/AutoSSR/master/stable',
  'https://heikejilaila.xyz/keji.php?id=22c7b9fdda20bb7405b270cd75971f66',
]

export default target.map(url => new Crawler3(url));