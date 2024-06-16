function add(num1 , num2) { // num1 and num2 are parameters
    return num1+num2;
}
function mul(num1 , num2) {
    return num1*num2;
}
// console.log(add(4,5));  // 4 and 5 are arguments
// console.log(mul(4,5));

function loginuser(username){
    if(username === undefined || !undefined) return "please enter a username first"
    return `${username} just logged in`
}
// console.log(loginuser("Abhay"));
// console.log(loginuser("")); // undefined just logged in 


// THIS WILL HELP WHEN WE ARE NOT SURE ABOUT NUMBER OF ARGUMENTS
function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(100 , 200 , 965 , 987));


// EXTRACTING THE INFOS FROM THE OBJECTS
// const user1 = {
//     name : "abhay",
//     isLoggedin : true
// }
// const user2 = {
//     name : "vaibhav",
//     isLoggedin : false
// }
// const user3 = {
//     name : "arayn",
//     isLoggedin : true
// }

// function getuserName(...users) {
//    users.forEach(user => {
//     console.log(`user name is ${user.name} and log in info is ${user.isLoggedin}`);
//    });
// }
// getuserName(user1,user2,user3)



// PASSING ARRAY
const arr = [200,300,400,500]
function returnsecondvalue(array) {
    return array[1];
}
console.log(returnsecondvalue(arr));
console.log(returnsecondvalue([2,33,5,6,78,9]));