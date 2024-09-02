// MAP
const myNums = [1,2,3,4,5,6,7,8,9]
const newNUm = myNums.map((num) => {return (num & 1) == 1})
console.log(newNUm);


// WE CAN DO THE CHAINING OF THE MAP

// const newNUm = myNums
//         .map((num) => num *10)
//         .map((num) => num/5)
// console.log(newNUm);