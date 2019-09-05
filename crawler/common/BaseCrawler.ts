import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

interface Icrawler {
  url: string|null,
  reg: RegExp|null,
  getHttpResponse: () => Promise<AxiosResponse>,
  afterReg: Function | Array<Function>|null,
  preReg:Function|Array<Function>|null
}

type HttpMethod = 'get' | 'post';

export default class BaseCrawler implements Icrawler {
  public url: string|null = null;
  public reg:RegExp|null = null ;
  public afterReg:Function | Array<Function>|null =null ;
  public getHttpResponse: () => Promise<AxiosResponse>;
  public preReg:Function|null = null;

  constructor(url: string, method: HttpMethod = 'get',headers:Object|undefined=undefined) {
    this.url = url;
    this.getHttpResponse = () => axios({url,method,headers});
  }

  get result():Promise<Array <string> > {
    return new Promise(async resolve => {
      try {
        if (this.url !== null) {
          let { data: httpResponse } = await this.getHttpResponse();

          if (this.preReg !== null) {
            if (Array.isArray(this.preReg)) {
              this.preReg.forEach(fn => httpResponse = fn(httpResponse));
            }
            else {
              httpResponse = this.preReg(httpResponse);
            }
          }

          if (this.reg !== null) {
            httpResponse = httpResponse.match(this.reg);
          }

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
        // console.log(e);
        resolve([]);
      }
    })
  }
}