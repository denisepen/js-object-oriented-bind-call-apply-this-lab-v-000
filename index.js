function justInvoke(fn){
  return fn()
}


function setThisWithCall(fn, thisValue, arg){

  this.arg = arg
  this.thisValue = thisValue
   return fn.call("bob", thisValue, arg)
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  let newFunction = functionToBeCopied.bind(thisValue)
  return newFunction
}
