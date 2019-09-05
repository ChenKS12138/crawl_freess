import c1 from './resource/Crawler1';
import c2 from './resource/Crawler2';
import c3 from './resource/Crawler3';
import c4 from './resource/Crawler4';
import c5 from './resource/Crawler5';
import c6 from './resource/Crawler6';
import c7 from './resource/Crawler7';

export default async function () {
  const crawlers = [...c1, ...c2, ...c3, ...c4, ...c5, ...c6,...c7];
  const crawlerResponse = await Promise.all(crawlers.map(item => item.result));
  return crawlerResponse.reduce((total,current) => total.concat(current),[]);
}