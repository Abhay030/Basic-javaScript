// MAP
// const newNUm = myNums.map((num) => {return (num & 1) == 1})
// console.log(newNUm);


// WE CAN DO THE CHAINING OF THE MAP

const newNUm = myNums
        .map((num) => num *10)
        .map((num) => num/5)
console.log(newNUm);