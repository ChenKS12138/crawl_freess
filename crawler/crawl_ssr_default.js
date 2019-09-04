const { ssrGenerator } = require('../utils/parser.js');

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

module.exports = function () {
  return Promise.resolve(defaultObject.map(ssrGenerator))
};