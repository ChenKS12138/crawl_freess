import {ssrParser} from './parser';
import moment from 'moment';
import commonObj from './interface/commonObj';

moment.locale('zh-cn');

export default class Storage {
  private static SsrSet: Set<string> = new Set();
  public static timeStamp: string = moment().format('LLLL');
  public static timeout: number = 800;
  
  // accept Array <string>
  public static set data(SsrArray: Array<string>) {
    this.SsrSet = new Set(SsrArray);
    this.timeStamp = moment().format('LLLL');
  }

  // return Array <string>
  public static get data():Array<string>{
    return Array.from(this.SsrSet);
  }

  // return Array <commonObj>
  public static get parsedData(): Array<commonObj>{
    return this.data.map(item => {
      const parsed = ssrParser(item);
      return { ...parsed, url: item };
    });
  }

  // return number
  public static get size():number {
    return this.SsrSet.size;
  }
}