Function.prototype.apply = function(obj,args) {
  // obj即为调用函数的对象
  const context = obj
  const fn = new Symbol()
  // apply由函数调用,this为一个函数
  context[fn] = this
  const result = context[fn](args)
  delete context[fn]
  return result
}