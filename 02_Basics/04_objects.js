// const user = new Object() // this is a singleton object 

const user2 = {}  // this is not a singleton object.
// console.log(user);
// console.log(user2);

user2.id = "2323asd"
user2.name = "abhay"
user2.isLoggedin = true
// console.log(user2);


//WE CAN MAKE OBJECTS INSIDE A OBJECT.
const regularuser = {
    email : "sam@gmail.com",
    fullname : {
        user :{
            firstname : "abhay",
            lastname : "awastji",
            full_name : "Abhay dash"
        }
    }
}
// WE CAN ACCESS ANY DATA WITH DOT OPERATOR
// console.log(regularuser.fullname.user);
// console.log(regularuser);


// //COMBINING BOTH OBJECTS.
// const all_user = Object.assign(user2 , regularuser); // values from regular user will be appended into the user2
// const all_user2 = Object.assign({},user2 , regularuser); // all values from regular and user2 will be appended into empty object.
// const new_users = {...user2 , ...regularuser};
// console.log(new_users);


// getting keys and values
// console.log(Object.keys(regularuser));
// console.log(Object.values(regularuser));
console.log(regularuser.hasOwnProperty('firstname'));