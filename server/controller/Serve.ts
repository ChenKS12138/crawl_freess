import BaseController from './common/BaseController';
import { Context } from 'koa';
import Crawler from '../../crawler/index';
import {string2base64} from '../../utils/parser'

const template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>refresh</title>
  </head>
  <body>
  refreshing...
  <script>
  setTimeout(function(){
    location.href="/info";
  },1000);
  </script>
  </body>
  </html>
`;

class Serve extends BaseController {
  static crawler: Crawler = new Crawler();

  @BaseController.GET('/')
  async index(ctx:Context) {
    const { n } = ctx.query;
    let data = await Serve.crawler.getData();
    const num = (n === undefined||parseInt(n) === NaN) ? 0 : parseInt(n);
    data = num === 0 ? data : data.slice(0,Math.min(data.length,n));
    ctx.body = string2base64(data.join("\n"));
  }

  @BaseController.GET('/info')
  async info(ctx: Context) {
    const {allCount,count,timeout,updateTime } = Serve.crawler.storage;
    const response = {
      all: allCount,
      available: count,
      rate:`${(count/allCount*100).toFixed(2)}%`,
      timeStamp:updateTime,
      timeout:timeout
    }
    ctx.body = JSON.stringify(response);
  }

  @BaseController.GET('/refresh')
  async refresh(ctx:Context) {
    const { timeout } = ctx.query;
    const { storage } = Serve.crawler;
    storage.timeout=timeout?parseInt(timeout):storage.timeout;
    Serve.crawler.CrawlerData();
    ctx.body = template;
  }
}