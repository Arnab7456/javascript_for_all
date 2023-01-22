function a(){
    console.log(b)
    // var b =15
    c()
    function c(){
        console.log(b)
    }
}
// it's declear it on global place 
let b = 10

a()

const myName = "Oluwatobi";

// Call myName variable from a function:
function getName() {
  return myName;
}
/*
console.log(b)
    but it's here b not present in global place , it's present on function space
*/

/*
    In other words, an item's lexical scope is the place in which the item got created.
    lexcial env is the local memories along with lexical env of it's perent
*/