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
  'https://raw.githubusercontent.com/ssrsub/ssr/master/ssrsub',
  // 'https://raw.githubusercontent.com/AmazingDM/sub/master/ssrshare.com',
  'https://yzzz.ml/freessr/',
  'https://raw.githubusercontent.com/voken100g/AutoSSR/master/online',
  'https://raw.githubusercontent.com/voken100g/AutoSSR/master/stable',
  'https://raw.githubusercontent.com/voken100g/AutoSSR/master/recent',
  'https://heikejilaila.xyz/keji.php?id=22c7b9fdda20bb7405b270cd75971f66',
  'https://prom-php.herokuapp.com/cloudfra_ssr.txt',
  'https://heikejilaila.xyz/keji.php?id=859304b7153cc656391edb26ab9d181b',
  'https://n55.pw/link/h6BpeXKqtrkQiS1z',
  'https://heikejilaila.xyz/keji.php?id=390acc194751aa8bf87c28e3809831db',
  'https://raw.githubusercontent.com/iziming/FreeSSR/master/freenodeplain.txt',
  'https://raw.githubusercontent.com/BeanWei/freeSSR/master/README.md',
  'https://yangwangssr.000webhostapp.com/'
]

target.forEach(url => new Crawler3(url));