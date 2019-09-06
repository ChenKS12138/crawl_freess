import { ssrGenerator } from '../../utils/parser';
import BaseCrawler from '../common/BaseCrawler';

const defaultObject = [
  {
    method: 'AES-256-CFB',
    password: 'dongtaiwang.com',
    ip: '162.245.239.74',
    port: 40902
  },
  {
    method: 'AES-256-CFB',
    password: 'dongtaiwang.com',
    ip: '67.21.94.192',
    port: 23478
  }
];

class Instance extends BaseCrawler {
  public ssrAddress: string ;
  constructor(ssr: string) {
    super('null', 'get');
    this.ssrAddress = ssr;
  }
  public get result() {
    return Promise.resolve([this.ssrAddress]);
  }
}

defaultObject.forEach(item => new Instance(ssrGenerator(item)));