function x() {
    for (let i = 0; i <= 5; i++) {
        setTimeout(function () {
            console.log(i)
        }, i*3000)
        console.log("SetTimout")
    }

}
x()
function y() {
    function close(){
        for (let i = 0; i <= 5; i++) {
            setTimeout(function () {
                console.log(i)
            }, i*3000)
        }
         close(i)
    }
    console.log("time out function ")
}
y()
