/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 14:59:25
 * @LastEditTime: 2019-09-05 14:59:25
 * @LastEditors: your name
 */
import BaseCrawler from '../common/BaseCrawler';
import { REG_4 } from '../common/CommonReg';
import { AFTERREG_4 } from '../common/CommonAfterReg';

class Crawler5 extends BaseCrawler{
  reg = REG_4;
  afterReg = AFTERREG_4;
  constructor(url: string) {
    super(url, 'get');
  }
}

// not stable
const target = [
  'https://www.youneed.win/free-ss'
];

target.forEach(url => new Crawler5(url));