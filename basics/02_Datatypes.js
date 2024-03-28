//number => 2 to the power 53
// bigint 
// String => ""
// boolen => true /false
// null => it is the stand alone value
// undefined => vairbale declared hai aur value initialized nhi hai
// Symbol => unique



//object
let a = "Abhay"
console.log(typeof(a)) // string
console.log(typeof(null)) //Object
console.log(typeof(undefined)) //undefined

// Primitive 
// 7 types : String , Number , Boolean, Null , undefined ,Symbol, bigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);// returns false
const bogNumber = 988765434567899876n


// Reference (Non  Primitive)
// Array , Objects , Functions
const Hero = ["love" , "faith" , "Honor"] //Array

let myobj = {                             //Object
    name: "abhay",
    class: 14
}
console.log(myobj);

const myfunction = function() {           //Function
    console.log("hello I am abhay");
}
console.log(typeof myfunction);





////////////////////////////////////
// Stack(Primitive) and Heap(Non - Primitive) Memories

