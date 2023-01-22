// so what is the difference b/w MAP and For each

/*
    => in case of For each loop we donot create a new arrays just print value but in case of MAP function we create a new arrays a store value in it then print this 
*/

let num = [1,2,8,9,7]
let a =num.map((value)=>{
    console.log(value)
    return value 
})
console.log(a)

let num1 = [12,4,78,46,23]
let arr = num1.map((ele,index)=>{
    console.log(ele,index)
    return ele + index
})
console.log(arr)


let arr1 = [1,2,8,9,7]

// now we want to double this arrays

function double (x){
    return x*2
}
let multi = arr1.map(double)
    console.log(multi)

// talk about binary
function binary(x){
    return x.toString(2)
} 
    let binary1 = arr1.map(binary)
        console.log(binary1)
