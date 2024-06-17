// const user = "" // this is considered as the false value 
const user = "abhay@gmail.com"  // this is considered as the true value

if (user) {
    console.log("Logged in ");
} else {
    console.log("Not Logged in ");
}

// FALSY VALUES
// false
// 0
// -0
// ""
// null
// undefined
// NaN
// all the values other than are the falsy values are true

// TRUTHY VALUES
// "0" 
// false
// []
// {}
// function(){}


const myobj = {}
if (Object.keys(myobj).length == 0) {
    console.log("Object is empty");
}

// Some true statements
// false == 0
// false == ''
// 0 == ''


///////////////////////////////////////////////////////////


let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10 :-  these things are done when we use api's because sometime we can also get null values.
var1 = undefined ?? 15 // 15
val1 = null ?? 12 ?? 10 // first ture value is assigned
console.log(val1);



const icecreamprice = 100
icecreamprice <= 80 ? console.log("less than 80") : console.log("greter than 80");