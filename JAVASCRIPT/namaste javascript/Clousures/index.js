function x() {
    var y = 7
    function z() {
        console.log(y)
    }
    y=255
    return z
    // z()
}
var b = x()
// its return value of function z
console.log(b)
// now we understand the power of clousers , it's actualy return the function and a lexical structure of function

// function along with it lexical scope bundel togeather froms a Clouser
b()
console.log("hello")

// But we also follow this tchniques
function arnab() {
    var name1 = "Arnab Das"
    return  function dev() {
        console.log(name1)
    }
   

}
var ar=arnab()
console.log(ar)

// 

function s(){
    var q=900
    function p(){
        var e=45
        function x(){
            console.log(q,e)
        }
        e=7878
        x()
    }
    p()
}
s()


/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created
 every time a function is created, at function creation time.

*/