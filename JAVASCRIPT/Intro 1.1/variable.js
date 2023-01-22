console.log("welcome to javascript ")
var a = 67
console.log(a)
a = "Arnab"
console.log(a)

//what happen ?
/*
    javascript is dynamically type language where we can change the value in run time;

    Q2. Now dicuss the fundamental concept of var , let , const ?
    Q3. why we don't use var in javascript ?
    => var we use for globally specified , and let and const are block function { }
*/



var b = 45
var c = "hello1"
var d = null
{
    let b = "arnab1"
    console.log(b)
}
console.log(b)

// const (you can't change variable and not possible redeclear)
const developerID = "arnabdas.dev1@gmail.com"
console.log(developerID)

