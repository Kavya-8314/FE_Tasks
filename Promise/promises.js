let newPromise=new Promise(function(resolve,reject){
    if(false){
        resolve("OK")
    }else{
      reject("Not")
    }
})
//console.log(newPromise)
newPromise.then(function func(k){
    console.log(k)
})    .catch(err=>console.log(err))
     .finally(()=>console.log("message"))

