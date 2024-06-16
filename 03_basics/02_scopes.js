// scope: var is function-scoped, meaning it is only accessible within the function it is declared in. If declared outside a function, it becomes globally scoped. they are initialized with undefined until the code execution reaches the line where the var statement is.




//EXAMPLE OF VAR

// function exampleVar() {
//     if (true) {
//         var x = 10;
//     }
//     console.log(x); // 10 (accessible due to function scope)
// }

// exampleVar();

// console.log(y); // undefined (due to hoisting)
// var y = 20;
// console.log(y); // 20





// scope: let is block-scoped, meaning it is only accessible within the block (denoted by {}) it is declared in.
// Accessing them before declaration results in a ReferenceError






// EXAMPLE OF LET

// function exampleLet() {
//     if (true) {
//         let x = 10;
//         console.log(x); // 10
//     }
//     // console.log(x); // ReferenceError: x is not defined (due to block scope)
// }

// exampleLet();

// // console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 20;
// console.log(y); // 20






// scope: const is block-scoped, similar to let.Accessing them before declaration results in a ReferenceError.


// EXAMPLE OF CONST
// function exampleConst() {
//     if (true) {
//         const x = 10;
//         console.log(x); // 10
//         // x = 20; // TypeError: Assignment to constant variable.
//     }
//     // console.log(x); // ReferenceError: x is not defined (due to block scope)
// }
// exampleConst();
// // console.log(y); // ReferenceError: Cannot access 'y' before initialization
// const y = 20;
// console.log(y); // 20
// const z = { prop: 1 };
// z.prop = 2; // Allowed
// console.log(z.prop); // 2
// const arr = [1, 2, 3];
// arr.push(4); // Allowed
// console.log(arr); // [1, 2, 3, 4]
