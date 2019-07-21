const probe = require('./probe');
const {ssrParser} =require('../utils/parser');
const moment = require('moment');
moment.locale('zh-cn');
class MySsr {
  constructor(){
    this.srrSet = new Set();
    this.allSrrSet = new Set();
    this.updateTime = moment().format('LLLL');
    this.timeout= 1500;
  }
  async append(ssrArray){
    this.allSrrSet = new Set(ssrArray);
    const responses = await Promise.all(ssrArray.map(item => {
      return new Promise (async resolve => {
        const {ojbk,avg} = await probe(ssrParser(item),this.timeout);
        resolve({item,access:ojbk,avg});
      })
    }))
    const available = responses.filter(item => item.access).sort((a,b) => a.avg - b.avg).map(item => item.item);
    this.srrSet = new Set(available);
    this.updateTime = moment().format('LLLL');
  }
  async extract(isAll=false){
    // return isAll===false ? Array.from(this.srrSet) : Array.from(this.allSrrSet);
    if(isAll === true){
      return Array.from(this.allSrrSet);
    }
    else{
      const response = await Promise.all(Array.from(this.allSrrSet).map(item => {
        return new Promise(async resolve => {
          const {ojbk,avg} = await probe(ssrParser(item),this.timeout);
          resolve({item,access:ojbk,avg});
        })
      }))
      const available = response.filter(item => item.access).sort((a,b) => a.avg - b.avg).map(item => item.item);
      this.srrSet = new Set(available);
      return available;
    }
  }
  get allCount(){
    return this.allSrrSet.size;
  }
  get count(){
    return this.srrSet.size;
  }
}

module.exports = { MySsr };