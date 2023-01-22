let a = 5
let b = 10

function func(a,b){
    return 1+a+b
}
console.log("function sum is : " , func(a,b))

const sum = (a,b)=>{
    return a+b
}
console.log("const sum is : " , sum(9,10))

const Arnab = ()=>{
     console.log("greet")
}
// void function 
Arnab()