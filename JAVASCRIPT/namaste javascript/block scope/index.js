if(true){
    // block scope
    var a = 10
    console.log(a)
}
// block scope
{
    // var basically in global scope
    var a =20
    // in console let and const are block scope , 
     let b =45
    const c = 78   
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)
// ReferenceError: b is not defined
/*
console.log(b)
console.log(c)

*/

