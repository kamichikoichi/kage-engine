function Buhin(number){
  // method
  function set(name, data){ // void
    this.hash[name] = data;
  }
  Buhin.prototype.push = set;
  Buhin.prototype.set = set;
  
  function search(name){ // string
    if(this.hash[name]){
      return this.hash[name];
    }
    return ""; // no data
  }
  Buhin.prototype.search = search;
  
  // property
  this.hash = {};
  
  // initialize
  // no operation
  
  return this;
}
