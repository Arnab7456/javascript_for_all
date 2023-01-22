console.log("start")
setTimeout(function cbT(){
    console.log("cb setTimeout")
},5000)

fetch("https://api.netflix.com").then(function cbF(){
    console.log("cb Netflix")
})

console.log("end")

/*
    what happen here and difference ?
    1.first its print "start" now its time to deal with fetch api we called here
    there is a concept of MICROTASK QUEUE
        waht happen there ==> it's not wait for 5000 ms only take time around 50ms and print the cbTimeout

    2. in the case of event loop we see the concept of the value first store in  the call back queue and then through the event loop it's reach call back queue and terminal store the value but in case of fetch its not store any reference value

    *** promises 

*/