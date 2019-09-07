import probe from './probe';
import {ssrParser} from '../utils/parser';
import moment from 'moment';
import pingResult from './interface/pingResult'

moment.locale('zh-cn');

export default class Storage {
  public ssrSet: Set<string>;
  public allssrSet: Set<string>;
  public updateTime: string;
  public timeout: number;

  constructor(){
    this.ssrSet = new Set();
    this.allssrSet = new Set();
    this.updateTime = moment().format('LLLL');
    this.timeout= 500;
  }
  async append(ssrArray:Array<string>){
    this.allssrSet = new Set(ssrArray);
    const responses:Array<pingResult> =await Promise.all(ssrArray.map(item => {
      return new Promise(async resolve => {
        const { access, avg } = <pingResult>await probe(ssrParser(item), this.timeout);
        resolve({item,access:access,avg});
      })
    }))
    const available:Array<string> = responses.filter(item => item.access).sort((a,b) => a.avg - b.avg).map(item => <string> item.item);
    this.ssrSet = new Set(available);
    this.updateTime = moment().format('LLLL');
  }
  async extract(isAll=false):Promise< Array<string> >{
    if(isAll === true){
      return Array.from(this.allssrSet);
    }
    else{
      const response:Array<pingResult> = await Promise.all(Array.from(this.allssrSet).map(item => {
        return new Promise(async resolve => {
          const {access,avg} = <pingResult> await probe(ssrParser(item),this.timeout);
          resolve({item,access,avg});
        })
      }))
      const available:Array<string> = response.filter(item => item.access).sort((a,b) => a.avg - b.avg).map(item => <string> item.item);
      this.ssrSet = new Set(available);
      return available;
    }
  }
  get allCount(){
    return this.allssrSet.size;
  }
  get count(){
    return this.ssrSet.size;
  }
}