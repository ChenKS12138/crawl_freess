const probe = require('./probe');
class MySsr {
  constructor(){
    this.srrSet = new Set();
    this.allSrrSet = new Set();
  }
  async append(ssrArray){
    this.allSrrSet = new Set(ssrArray);
    const available = await ssrArray.filter(async item =>{
      const ojbk = await probe(item);
      return ojbk;
    } )
    this.srrSet = new Set(available);
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