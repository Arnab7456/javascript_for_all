let arr = [ 12, 5, 80, 49, 27 ]
let arr1 = arr.filter((value)=>{
    // check number grater than 10 , only print here
    return value>10
})
console.log(arr1)
let arr2 = arr.filter((odd)=>{
    return odd%2
})
console.log(arr2)

let arr3 = arr.filter((even)=>{
    return even%2 == 0
})
console.log(arr3)
/*
    filter can't change the value of original arrays 
*/