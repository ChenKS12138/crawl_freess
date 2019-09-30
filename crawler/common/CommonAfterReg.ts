import { ssrGenerator } from '../../utils/parser';
import { REG_5 } from './CommonReg';

export const AFTERREG_1 = function (dataList:Array<string>) {
  return dataList;
};

export const AFTERREG_2 = function (dataList:Array<string>) {
  return dataList.map(item => item.slice(1, -1));
};

export const AFTERREG_3 = function (dataList:Array<string>) {
  return dataList.map(item => item.slice(0, -2));
};

export const AFTERREG_4 = [
  function (dataList: Array<string>) {
    return dataList.map(item => item.match(REG_5));
  },
  function (dataList: Array< any >) {
    const generator = (source:Array<string>) => {
      const [ip, port, password, method, time, country] = source;
      return ssrGenerator({ ip, port, password, method })
    };
    return dataList.map(generator);
  }
];

export const AFTERREG_5 = [
  function (dataList:Array<string>) {
    return dataList.map(item => item.substr(1, item.length - 1));
  }
]