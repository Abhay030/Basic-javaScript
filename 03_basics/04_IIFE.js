// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is a common pattern used to create a new scope and avoid polluting the global scope, among other benefits. Here's a deep dive into IIFEs, including their syntax, features, and usage.


// SYNTAX
(function() {
    // Code to be executed immediately
})();

// or alternatively
(function() {
    // Code to be executed immediately
}());

// Anonymous Function: The function is defined without a name (an anonymous function).

// Parentheses: The function definition is wrapped in parentheses to convert it from a function declaration to a function expression.

// Invocation: The trailing parentheses () immediately invoke the function.


//////////////////////////////////////////////
(function() {
    var privateVar = "I am private";
    // console.log(privateVar); // "I am private"
})();

// console.log(privateVar); // ReferenceError: privateVar is not defined


/////////////////////////////////////////////
//automatic invocation as soon as it is defined
(function() {
    // console.log("This runs immediately!");
})();



/////////////////////////////////////////////
//IIFEs can accept arguments, making them flexible for initialization tasks.
(function(a, b) {
    // console.log(a + b); // 3
})(1, 2);


/////////////////////////////////////////////
(function chai(){
    console.log(`I KNOW YOU`);
})()


