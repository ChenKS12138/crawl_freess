import {ssrParser} from './parser';
import moment from 'moment';
import commonObj from './interface/commonObj';

moment.locale('zh-cn');

export default class Storage {
  private static SsrSet: Set<string> = new Set();
  public static timeStamp: string = moment().format('LLLL');
  public static timeout: number = 800;
  
  public static set data(SsrArray: Array<string>) {
    SsrArray.forEach(item => this.SsrSet.add(item));
    this.timeStamp = moment().format('LLLL');
  }

  public static get data():Array<string>{
    return Array.from(this.SsrSet);
  }

  public static get parsedData():Array<commonObj>{
    return this.data.map(item => ssrParser(item));
  }

  public static get size():number {
    return this.SsrSet.size;
  }
}