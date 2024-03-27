//NUMBER TO BOOLEAN CONVERSION
let loggedin = 1
console.log(loggedin); //1
let IsloggesIn = Boolean(loggedin)
console.log(IsloggesIn); //true
// 1 => true , 0 => false
// "" => false
// "abhay" = >true

//STRING TO NUMBER CONVERSION
let a = "35is"
console.log(a);  //returns 35is
let b = Number(a)
console.log(b); // returns NaN

let w = "35"
let r = "78"
console.log(w+r); // STRING CONCATENATION

let t = Number(w) + Number(r) //ADDITION by conversion of the string to the number 
console.log(t);


//NUMBER TO STRING CONVERSION
let q = 98
let c = String(q)
console.log(q);
console.log(typeof q);