function iterativeLog(array){
  array.forEach((element,index)=>{
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var array = [0,1,2,3,4]
  array.forEach((callback) =>{
    return array
  })
}
