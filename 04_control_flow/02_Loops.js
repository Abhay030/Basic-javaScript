
let array = [12,34,56]
let array1 = ['abhay','vaibhav','suresh']

// for (let index = 0; index < array.length; index++) {
//       console.log(array[index]);
// }

// array.forEach(element => {
//     console.log(element);
// });

// const greet = "hello boi"
// for (const num of greet) {
//     console.log(num);
// }


//Maps

// const map = new Map();
// map.set('90','india');
// // console.log(map.get('90')); // india
// console.log(map);


// const games = {
//     'game1' : 'NFS',
//     'game2' : 'GTA'
// };
// for (const [key , value] of games) { // THIS WILL NOT WORK BECAUSE OBJECTS ARE NOT ITERABLE NY FOR OF
//     console.log(key, ':-', value);
// }

// for (const key in games) {
//     console.log(`${key} is ${games[key]}`);
// }


// const game = ['NFS' , 'GTA' , 'PIGI']
// // FOR EACH ;-  only used for arrays.
// game.forEach(e => {
//     console.log(e);
// });


// WE CAN ALSO PASS A FUNCTION TO FOR EACH
// function NumIsODD(num){
//     if((num & 1) == 1){
//        console.log(`${num} is odd`);
//     }
//     else console.log(`${num} is even`);
// }
// const numbers = [1,3,5,6,3,4,6]
// numbers.forEach(NumIsODD)





// MOST TIME WE GET THE INPUTS IN AS A ARRAY OF OBJEECTS
// SO WE CAN USE THE FOREACH LOOP HERE TO EFFECTIVELY GET ACCESS TO ALL 
// THE PROPERTIES OF THE OBJECTS WHICH IS INSIDE

// FOREX:- 
const HighEndgames = [
    {
        game : 'GTA V',
        gamesize : '125GB'
    },
    {
        game : 'GOD OF WAR',
        gamesize : '200GB'
    },
    {
        game : 'WATCH DOGS',
        gamesize : '100GB'
    }
]
HighEndgames.forEach((e) => {
    console.log(`${e.game} is ${e.gamesize}`);
})


