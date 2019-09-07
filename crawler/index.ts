import BaseCrawler from './common/BaseCrawler';
import Storage from '../utils/storager';

import './resource/Crawler1';
import './resource/Crawler2';
import './resource/Crawler3';
// import './resource/Crawler4';
import './resource/Crawler5';
import './resource/Crawler6';
import './resource/Crawler7';

export default class Crawler {
  // process and storage crawled data
  public storage: Storage = new Storage();

  constructor(interval: number = 600000) {
    this.CrawlerData();

    // auto refresh data
    if (interval !== 0) {
      setInterval(this.CrawlerData, interval);
    }
  }

  // the method to crawl data
  public async CrawlerData() {
    const crawlers = Array.from(BaseCrawler.CrawlerPool);
    const crawlerResponse = await Promise.all(crawlers.map(item => item.result));
    this.storage.append(crawlerResponse.reduce((total,current) => total.concat(current),[]));
  }

  // get crawl data
  public getData() {
    return this.storage.extract();
  }

  // static method for test
  public static async RunTest() {
    const crawlers = Array.from(BaseCrawler.CrawlerPool);
    const crawlerResponse = await Promise.all(crawlers.map(item => item.result));
    return crawlerResponse.reduce((total,current) => total.concat(current),[]);
  }
}