
// run this on web browser

let age = prompt("enter your age")
age = Number.parseInt(age)
if (age > 25) {
    alert("pay insurence")
} else if (age <= 24 && age >= 18) {
    alert("create your insurence id")
}
else {
    alert("invalid user")
}

