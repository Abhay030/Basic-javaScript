// Singleton --> 

// Singleton Pattern Kya Hai?
// Singleton ek design pattern hai jisme hum ensure karte hain
// ki ek class ka sirf ek hi instance banega. Matlab, ek hi
// object hoga jo puri system mein use hoga. Isse humara 
// coordination easy ho jata hai, kyunki ek hi instance hota 
// hai jo sab jagah se access ho sakta hai.


// object literals 

// const user = {} // object creation
const sym =  Symbol("key1")  // creation of the symbol       
const user = {
    1 : "1",
    3 : "2",
    2 : "3",
    name : "Abhay",
    "topa": "Aryan", // we cannot access this with Dot operator
    age : "20",
    [sym] : "keyyed",
    location: "kanpur",
    isloggedIn: true ,
    lastLoggedIn : ["Monday","wednesday"]
}

// console.log(user.name);
// console.log(user["topa"]);  // use with when key in unaccessible 
// console.log(user[sym]);  // use with when key in unaccessible 


// CHANGING THE VALUES OF THE KEY 
// Object.freeze(user)  // FREZZES THE MODIFICATION

// user.name = "vaibhav";
// console.log(user.name);  // vaibhav
// console.log(user);
// {
//     '1': '1',     // THESE NUMBERS GETS SORTED ACCORDINGLT ( 1,2,3)
//     '2': '3',
//     '3': '2',
//     name: 'vaibhav',
//     topa: 'Aryan',
//     age: '20',
//     location: 'kanpur',
//     isloggedIn: true,
//     lastLoggedIn: [ 'Monday', 'wednesday' ],
//     [Symbol(key1)]: 'keyyed'
//   }


user.greeting = function(){
    console.log("hello brother");
}
user.greetingtwo = function(){
    console.log(`hello brother, ${this.isloggedIn} , ${this.age}`);
}
console.log(user.greeting());
console.log(user.greetingtwo());
