// Types of Execution Contexts
// There are three main types of execution contexts in JavaScript:

// Global Execution Context (GEC):
// This is the default execution context created when the JavaScript code starts executing. There is only one global context in a program.
// It contains global objects, functions, and variables.
// The this keyword refers to the global object (window in browsers, global in Node.js).

// Function Execution Context (FEC):
// Created whenever a function is called.
// Each function has its own execution context, which is created when the function starts executing and destroyed when the function completes.
// The this keyword refers to the object that called the function.

// Eval Execution Context:
// Created when the eval() function is executed.
// Contains the code passed to eval().