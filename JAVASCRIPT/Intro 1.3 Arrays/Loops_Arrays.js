let num =[45,545,425,78,36]
for(let i =0 ; i<num.length;i++){
    console.log("priniting value is \t",num[i])
}

num.forEach((element)=>{
    console.log(element)
})

// arrays 'from'
let test = "Arnab"
console.log(typeof(test))
let arr = Array.from(test)
console.log(arr)
console.log(typeof(arr))


/// lets talk about for .... of

for(let i of num){
    console.log(i)
}

// index printing using for in loop
for(let j in num){
    console.log("value\t",num[j],"index\t",j)
    // num[j] => printing the value only
    // using for in loop we can also print the index of given value pair
}