console.error("error found here")
console.warn("don't modify it")
console.assert("hello")
obj = {a:1 ,b:45 ,c :478}
console.table(obj)

// console.clear("all clear")

console.time("a")
console.time("for loop")
for(let i = 0 ; i<5;i++){
    console.log(455)
}
console.timeEnd("for loop")