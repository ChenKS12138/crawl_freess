import {ssrGenerator} from '../../utils/parser'

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

export default defaultObject.map(item => {
  return ({
    get result() {
      return Promise.resolve(ssrGenerator(item));
    }
  })
})