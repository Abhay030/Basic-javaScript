//////////////// ARROW FUNCTION ////////////

const user = {
    username : "Abhay",
    price : 87,
    
    welcomeMessage: function() {
        console.log(`hello ${this.username}, Welcome to our Website`);
        console.log(this); // current context
    }
}
// console.log( this);  // {} ==> an object is returned 
// user.welcomeMessage();
// user.username = "binod"
// user.welcomeMessage();


const user2 = () => {
    let username ="abhay"
    console.log(this.username); // undefined
}
// user2()


const addTwo = (num1 , num2) => {
    return num1 + num2;
}
// console.log(addTwo(2,5));


////////////////////////

// WHEN PARENTHESIS IS USED THEN THERE IS NO NEED OF WRITING A RETURN STATEMENT.
const multiply = (num1 , num2) => (num1*num2) 
// console.log(multiply(2,5));


///////////////////////

// When returning object literals, you need to wrap the object in parentheses to avoid confusion with the function body.
const multiply2 = (num1 , num2) => ({name : "abhay"}) // returning oobject
// console.log(multiply2(8,7));



//////////////// OVERALL ///////////
// Traditional function expression
const add1 = function(a, b) {
    return a + b;
};

// Arrow function
const add2 = (a, b) => {
    return a + b;
};

// Even more concise arrow function (implicit return)
const add3 = (a, b) => a + b;


// If the function body contains only a single expression, you can omit the braces and the return keyword. The value of that expression will be implicitly returned.
const square = x => x*x
// console.log(square(6))




////////////////////////
// Arrow functions do not have their own this. Instead, they lexically inherit this from the parent scope. This makes them particularly useful for maintaining the correct this context in callbacks.

// function Person(){
//     this.age = 45,

//     setInterval(() => {
//         this.age++; // inherit this from the parent function
//     },1000);
// }
// const person = new Person();



////////////////////////
// Arrow functions do not have their own arguments object. If you need to access the arguments of an arrow function, you should use the rest parameters syntax (...args).

const logArgs = (...args) => {
    console.log(args);
};
// logArgs(1, 2, 3); // [1, 2, 3]


// THIS WORKS CORRECTLY
const greet = () => "welcome"
console.log(greet());

// Arrow functions provide a concise way to write functions in JavaScript, with some key differences from traditional function expressions and declarations. They are particularly useful for maintaining the this context in callbacks and for writing short, one-line functions. However, they are not suitable for all situations, such as when you need to use the arguments object or when defining methods in object literals. Understanding these nuances is important for effectively using arrow functions in your code.