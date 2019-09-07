/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 21:13:00
 * @LastEditTime: 2019-09-07 00:41:15
 * @LastEditors: Please set LastEditors
 */
import axios, { AxiosResponse } from 'axios';

// crawler timeout
axios.defaults.timeout = 30000;

interface Icrawler {
  url: string|null,
  reg: RegExp|null,
  getHttpResponse: () => Promise<AxiosResponse>,
  afterReg: Function | Array<Function>|null,
  preReg:Function|Array<Function>|null
}

type HttpMethod = 'get' | 'post';

// BaseCrawler
export default class BaseCrawler implements Icrawler {
  public url: string|null = null;
  public reg:RegExp|null = null ;
  public afterReg:Function | Array<Function>|null =null ;
  public getHttpResponse: () => Promise<AxiosResponse>;
  public preReg: Function | Array<Function> |null = null;
  public isTest: boolean = false;
  public static CrawlerPool: Set<BaseCrawler> = new Set();
  
  constructor(url: string, method: HttpMethod = 'get',headers:Object|undefined=undefined) {
    this.url = url;
    this.getHttpResponse = () => axios({ url, method, headers });
    BaseCrawler.CrawlerPool.add(this);
  }

  public get result():Promise<Array <string> > {
    return new Promise(async resolve => {
      try {
        if (this.url !== null) {
          const startTime = Date.now();
          
          // crawling data from assigned url
          let { data: httpResponse } = await this.getHttpResponse();

          // print time of this request
          console.log(`${Date.now() - startTime}ms ${this.url}`);

          // process response data before match 
          if (this.preReg !== null) {
            if (Array.isArray(this.preReg)) {
              this.preReg.forEach(fn => httpResponse = fn(httpResponse));
            }
            else {
              httpResponse = this.preReg(httpResponse);
            }
          }

          // match response data and return an array
          if (this.reg !== null) {
            httpResponse = httpResponse.match(this.reg);
          }

          // process the matched data
          if (this.afterReg !== null) {
            if (Array.isArray(this.afterReg)) {
              this.afterReg.forEach(fn => httpResponse = fn(httpResponse));
            }
            else {
              httpResponse = this.afterReg(httpResponse);
            }
          }
          
          resolve(httpResponse);
        }
        else {
          resolve([]);
        }
      }
      catch (e) {
        if (this.isTest) {
          console.log(e);
        }
        else {
          console.log(`ERROR ${this.url}`);
        }
        resolve([]);
      }
    })
  }
  public static async RunTest(url: string, method: HttpMethod = 'get', reg?: RegExp, afterReg?: Function | Array<Function>, preReg?: Function | Array<Function>|undefined) {
    const testCrawler = new BaseCrawler(url, method);
    testCrawler.isTest = true;
    if (reg) {
      testCrawler.reg = reg;
    }
    if (preReg) {
      testCrawler.preReg = preReg;
    }
    if (afterReg) {
      testCrawler.afterReg = afterReg;
    }
    const httpResponse = await testCrawler.result;
    return httpResponse;
  }
}