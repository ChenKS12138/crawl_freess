import BaseCrawler from '../common/BaseCrawler';
import { AFTERREG_3 } from '../common/CommonAfterReg';
import { REG_3 } from '../common/CommonReg';
import {COMMON_PREREG1 } from '../common/CommonPreReg';

class Crawler4 extends BaseCrawler {
  afterReg = AFTERREG_3;
  reg = REG_3;
  preReg = COMMON_PREREG1;
  constructor(url: string) {
    super(url, 'get',{
      "Host":"www.liesauer.net",
      "Upgrade-Insecure-Requests":"1",
      "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
    })
  };
}

const target = [
  'https://www.liesauer.net/yogurt/subscribe?ACCESS_TOKEN=DAYxR3mMaZAsaqUb'
];

target.forEach(url => new Crawler4(url));