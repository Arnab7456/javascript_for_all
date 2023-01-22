// what is call back function in javascript ?
setTimeout(function (){
    console.log("call back Timer")
},5000)
function x(y){
    console.log("X")
    y()
}
x(function y(){
    console.log("Y")
})
// javascript id a syncronus single thraded langu

// click 
document.getElementById("clickMe")
.addEventListener("click",function xyz(){
    console.log("clicked")
})