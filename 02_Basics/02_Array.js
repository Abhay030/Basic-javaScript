const game = ["gta","bgmi","FF","fifa"]
const heros = ["thor" , "ironman" , "loki","homelander"]
// game.push(heros) // it adds the whole array as a object inside the game array
// console.log(game); 

// // BUT IF WE WANT TO ADD ONLY THE ELEMENTS OF THE HEROS ARRRAY THE WE  CAN USE (CONCAT) METHOD
// console.log(game.concat(heros));

// const all_heros_game = [...game,...heros] // Spread operator
// console.log(all_heros_game);

// const array = [1,2,3, [4,4,6],4,4,[7,8,9]]
// console.log(array.flat(Infinity)); // It megeres the subarrays to the main array as a elements

// CHECKING AND MAKING THE ARRAY FROM A STRING
console.log(Array.isArray("Abhay"));
console.log(Array.from("Abhay"));  // MAKES THE ARRAY OF THE STRING
// [ 'A', 'b', 'h', 'a', 'y' ]
console.log(Array.from({name: "Abhay"})); //[]


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]
