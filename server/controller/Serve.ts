import BaseController from './common/BaseController';
import { Context } from 'koa';
import Crawler from '../../crawler/index';
import Probe from '../../utils/probe';
import {string2base64} from '../../utils/parser'
import commonObj from '../../utils/interface/commonObj';
import Storage from '../../utils/storage';
import refreshView from '../views/refresh';

class Serve extends BaseController {
  static crawler: Crawler = new Crawler();

  @BaseController.GET('/')
  public static async index(ctx:Context) {
    const { n } = ctx.query;
    const parsedData:Array<commonObj> = Storage.parsedData;
    let urlArray:Array<string> = (await Probe.pingAll(parsedData)).filter(item => item.access).map(item => item.url);
    const num = (n === undefined||parseInt(n) === NaN || n < 0) ? 0 : parseInt(n);
    urlArray = num === 0 ? urlArray : urlArray.slice(0,Math.min(urlArray.length,n));
    ctx.body = string2base64(urlArray.join("\n"));
  }

  @BaseController.GET('/info')
  public static async info(ctx: Context) {
    const updateTime = Storage.timeStamp;
    const allCount = Storage.size;
    const timeout = Storage.timeout;
    const parsedData:Array<commonObj> = Storage.parsedData;    
    const availableCount = (await Probe.pingAll(parsedData)).filter(item => item.access).length;

    const response = {
      all: allCount,
      available: availableCount,
      rate:`${(availableCount/allCount*100).toFixed(2)}%`,
      timeStamp:updateTime,
      timeout:timeout
    }
    ctx.body = JSON.stringify(response);
  }

  @BaseController.GET('/refresh')
  public static async refresh(ctx:Context) {
    const { timeout } = ctx.query;
    if (Number.isInteger(timeout) && timeout >0) {
      Storage.timeout = timeout;
      Serve.crawler.CrawlerData();
      ctx.body = refreshView;
    }
    else {
      ctx.status = 501;
      ctx.body = "Illegal Parameter Substitution";
    }
  }
}