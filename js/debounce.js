function debounce(fn,delay){
  let timer
  return function() {
    let _this = this
    let args = arguments
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(_this,args)
      timer = null
    },delay)
  }
}