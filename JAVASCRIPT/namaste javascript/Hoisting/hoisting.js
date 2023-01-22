/*
hoisting is a memory allocation
 in js engine

*/
// var x = 7
// we found here undefine
function getName(){
    console.log("Hosting in js")
}
getName()
console.log(x)
console.log(getName)