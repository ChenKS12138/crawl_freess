import axios, { AxiosResponse } from 'axios';

// crawler timeout
axios.defaults.timeout = 20000;

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
  public preReg: Function | null = null;
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
        console.log(`ERROR ${this.url}`);
        resolve([]);
      }
    })
  }
}