let sum=(a,b)=>{
  return a+b
}
console.log(sum(5,7))

let greet=(name)=>{
  return "Hello "+ name+"!"
}
console.log(greet("Kavya"))

let check=(num)=>{
  if(num%2==0){
    return true;
  }else{
    return false;
  }
}
console.log(check(2))

let result=(n)=>{
  if(n>10){
  return true
}else{
  return false
}
}
console.log(result(17))

let checklength=(String1,String2)=>{
  if(String1.length>String2.length){
    return String1
  }else if(String1.length==String2.length){
   return "Equal Length"
  }else{
    return String2
  }

}
console.log(checklength("KavyaReddy","Lucky"))