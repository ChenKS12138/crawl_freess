import BaseCrawler from './common/BaseCrawler';
import Storage from '../utils/storage';

import './resource/Crawler_022';
import './resource/Crawler_113';
import './resource/Crawler_044';
import './resource/Crawler_163';
import './resource/Crawler_273';
import './resource/Crawler_default';

export default class Crawler {
  // process and storage crawled data
  constructor(interval: number = 600000) {
    this.CrawlerData();

    // auto refresh data
    if (interval !== 0) {
      setInterval(this.CrawlerData, interval);
    }
  }

  // the method to crawl data
  public async CrawlerData():Promise<void>{
    const crawlers = Array.from(BaseCrawler.CrawlerPool);
    const crawlerResponse = await Promise.all(crawlers.map(item => item.result));
    Storage.data = crawlerResponse.reduce((total,current) => total.concat(current),[]);
  }

  // static method for test
  public static async RunTest(): Promise<Array<string>>{
    const testCrawler = new Crawler(0);
    await testCrawler.CrawlerData();
    return Storage.data;
    // const crawlers = Array.from(BaseCrawler.CrawlerPool);
    // const crawlerResponse = await Promise.all(crawlers.map(item => item.result));
    // return crawlerResponse.reduce((total,current) => total.concat(current),[]);
  }
}