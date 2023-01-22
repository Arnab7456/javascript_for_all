let strat = "Strings"
console.log(strat.length)
console.log(strat[0])

let boy = "krishna"
let girl = "radhe"

let ras = `${girl} ${boy} love each other`
console.log(ras)

// escape functions
/*
Code  Result	  Description
\'	    '	        Single quote
\"	    "	        Double quote
\\	    \	        Backslash

*/

let text = "We are the so-called \"Vikings\" from the north.";
console.log(text)
let text1= 'It\'s alright.';
console.log(text1)

let text2 = "The character \\ is called backslash.";
console.log(text2)

let test = "Arnab"
console.log(test.toUpperCase())
console.log(test.toLowerCase())
console.log(test.slice(0,3))
console.log(test.replace("Ar","bkcd"))

// *** concatinat
let test1 ="devops role"
console.log(test.concat(" applying for a ",test1," job Id = 4545"))

let test2 = "   devops      "
console.log(test2.trim())
// using concatination 
let test3 = "Arnab " + "Amal " + "Mita"
console.log(test3)