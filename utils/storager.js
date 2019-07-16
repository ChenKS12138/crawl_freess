const probe = require('./probe');
const {ssrParser} =require('../utils/parser');
const moment = require('moment');
moment.locale('zh-cn');
class MySsr {
  constructor(){
    this.srrSet = new Set();
    this.allSrrSet = new Set();
    this.updateTime = moment().format('LLLL');
  }
  async append(ssrArray){
    this.allSrrSet = new Set(ssrArray);
    const responses = await Promise.all(ssrArray.map(item => {
      return new Promise (async resolve => {
        const ojbk = await probe(ssrParser(item));
        resolve({item,access:ojbk});
      })
    }))
    const available = responses.filter(item => item.access).map(item => item.item);
    this.srrSet = new Set(available);
    this.updateTime = moment().format('LLLL');
  }
  extract(isAll=false){
    return isAll===false ? Array.from(this.srrSet) : Array.from(this.allSrrSet);
  }
  get allCount(){
    return this.allSrrSet.size;
  }
  get count(){
    return this.srrSet.size;
  }
}

module.exports = { MySsr };