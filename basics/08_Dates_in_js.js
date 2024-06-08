// Dates

// let date = new Date()
// console.log(date);  // 2024-06-08T14:33:41.263Z
// console.log(date.toDateString()); //Sat Jun 08 2024
// console.log(date.toLocaleTimeString()); // 2:35:21 PM
// console.log(date.getDay()); // 6
// console.log(date.getDate()); // 8
// console.log(date.getHours()); // 14
// console.log(date.getFullYear()); // 2024
// console.log(date.getMinutes());  // 37
// console.log(date.getUTCDate());  // 8

// console.log(typeof date); //OBJECT


// // USER DEFINED DATES
// //  => Months are taken from 0
// let mydate = new Date(2023,0,23,12,3)
// console.log(mydate.toLocaleDateString()); // 1/23/2023
// console.log(mydate.toDateString());  // Mon jan 23 2023


// let mydate2 = new Date("01-14-2023")
// console.log(mydate2.toDateString()); // Sat Jan 14 2023
// console.log(mydate2.toLocaleDateString()); // 1/14/2023


//WE GET OUTPUT IN SECONDS
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mydate2.getTime());


// // SOME OTHER USEFUL FUNCTIONS
// let newDAte = new Date()
// console.log(newDAte.toLocaleDateString('default' , {
//     weekday: "long", // SATURDAY
//     weekday: "short", // SAT
//     weekday: "narrow" // S
// }));