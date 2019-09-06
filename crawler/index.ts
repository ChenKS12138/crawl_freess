import BaseCrawler from './common/BaseCrawler';
import Storage from '../utils/storager';

import './resource/Crawler1';
import './resource/Crawler2';
import './resource/Crawler3';
import './resource/Crawler4';
import './resource/Crawler5';
import './resource/Crawler6';
import './resource/Crawler7';

export default class Crawler {
  public storage: Storage = new Storage();

  constructor(interval: number = 600000) {
    this.CrawlerData();
    if (interval !== 0) {
      setInterval(this.CrawlerData, interval);
    }
  }

  public async CrawlerData() {
    const crawlers = Array.from(BaseCrawler.CrawlerPool);
    const crawlerResponse = await Promise.all(crawlers.map(item => item.result));
    this.storage.append(crawlerResponse.reduce((total,current) => total.concat(current),[]));
  }

  public getData() {
    return this.storage.extract();
  }

  public static async RunTest() {
    const crawlers = Array.from(BaseCrawler.CrawlerPool);
    const crawlerResponse = await Promise.all(crawlers.map(item => item.result));
    return crawlerResponse.reduce((total,current) => total.concat(current),[]);
  }
}