// Arrays

// const myArrays  = [2,3,2,3,1,3,2] 
// console.log(myArrays[3]);

// const my_arr = new Array(1,2,3,4)
// console.log(my_arr[3]);



// Array methods

// myArrays.push(6)
// myArrays.push(7)
// console.log(myArrays.sort()) // sorts the array
// console.log((myArrays.concat(my_arr)).sort()); // concats the both array and sorts it

//UNSHIFT
// console.log(my_arr.unshift(90)); // it puts the element at the start of the index and returns the length of the new array
// console.log(my_arr);

//Using UNSHIFT
const my_arr = new Array(1,2,3,4,90)
// my_arr.unshift(90);
// if (my_arr.includes(90)) {
//     const index = my_arr.indexOf(90)
//     my_arr.splice(index,1)
//     my_arr.splice(4,1)

// }
// console.log(my_arr);


// const arrr =  my_arr.join() // this new arrr whill be of string type 
// console.log(my_arr);
// console.log(arrr);
// console.log(typeof my_arr + " " + typeof arrr);  // object and string


//  SLICE AND SPLICE

//SLICE --> it return sonly the elements of the specified indexes given.
// console.log("A",my_arr);
// const myn1 = my_arr.slice(1,4)
// console.log(myn1);
// console.log("B",my_arr);


//SPLICE --> it trims down the array in the indexes mentioned 
console.log("A",my_arr);
const myn2 = my_arr.splice(1,3)
console.log(myn2);
console.log("B",my_arr);




