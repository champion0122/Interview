function deepClone(obj){
  // 判断obj是否是值类型或者null，若是直接返回原值
  if(typeof obj != 'object' || obj == null){
      return obj
  }
  // 剩余类型即引用类型，分数组以及object
  let result 
  if(obj instanceof Array){
    result = []
  }else{
    result = {}
  }
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      result[key] = deepClone(obj[key])
    }
  }
  return result
}

module.exports.deepClone = deepClone