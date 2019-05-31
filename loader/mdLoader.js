const getOptions = require('loader-utils').getOptions;
const marked = require("marked");

module.exports = function(md){
  const options = getOptions(this) || {};
  
  //设置是否可缓存标志的函数：
  this.cacheable();

  marked.setOptions(options);

  return marked(md)
}