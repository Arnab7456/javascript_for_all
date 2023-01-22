
// FUCNCTION  STATEMENT
    function a(){
        console.log("hello")
    }
// FUNCTION EXPRESSION 
var b= function xyz(){
    // named function expression
    console.log("here b is called")
    console.log(xyz)
}
a()
// it's shows b is not present i n the function
b()
// name function error
// xyz()

// ANONYMOUS FUNCTION
   /* function () {

    }
*/

// Difference between Parameter ands Arguments
/* The parameters are the aliases for the values that will be passed to the function. The arguments are the actual values. */
var c = function name(params1 , params2) { 
    console.log("aguments")
}
// this arguments
c(1,2)

//<======== FIRST CLASS FUNCTION ========>

var d = function (params1){
    return function xyz(){
    }
}
console.log(d())