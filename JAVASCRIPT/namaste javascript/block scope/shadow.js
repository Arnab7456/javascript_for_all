/// shadowing concept

// global 
var x = 45
// script space
let y  = 20
const z = 22
{
    var x = 41
    let y = 40
    const z =42
    console.log(x)
    console.log(y)
    console.log(z)
}
// it modified global variable "var" value and shadow the value of x and 
// excute the value of Block space
console.log(x)
// but in the case of Block scope variable (let) it can not change it's value of 
// global scope
console.log(y)
console.log(z)


/// shadowing in functions //

let c = 11
function b(){
    let c = 45
    console.log(c)
}
b()
console.log(c)

/*
    ilegal shadowing

    let a = 45
    {
        var a = 20
    }
*/

// thats also valid for const
let p = 25
function ARNAB() {
    var p = 55
    console.log(p)
}
ARNAB()
console.log(p)

/// lets talk about lexical scope
const g = 89
{
    const g = 44
    {
        const g = 23
        console.log(g)
    }
    console.log(g)
}
console.log(g)