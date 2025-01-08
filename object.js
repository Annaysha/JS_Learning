// object declaration
// first way
// var rahim = new Object();

// // second way
// rahim = {
//     fullName: "rahim mia",
//     age: 21,
//     address: "dhaka",
//     passion: "jobolder"
// }

// console.log(typeof(rahim));
// console.log(rahim);

// // access object property using dot notation
// console.log(rahim.fullName);
// // aa=ccess object property using bracket notation
// console.log(rahim["fullName"]);
// //add new property to the object
// rahim.zipCode = 1212;
// console.log(rahim);
// //to change the value of a property
// rahim.passion = "business";
// console.log(rahim);
// // add a function to the object
// rahim.welcomeMsg = function(){
//     console.log("Welcome to my profile");
// }
// console.log(rahim);
// console.log(rahim.welcomeMsg());


// ra,him = {
//     fullName: "rahim mia",
//     age: 21,
//     address: "dhaka",
//     passion: "jobolder",
//     welcomeMsg: function(){
//         console.log("Welcome to my profile");
//     }
// }

// // using for in loop to access object property
// for (item in rahim){
//     console.log(item + ": " + rahim[item]);
// }

// declare an array inside an object
// var objArr = {
//     normal : "Normal item",
//     name: ['Rahim', 'Karim', 'Rahima', 'Karima'],
//     age: [21, 22, 23, 24]
// }

// console.log(objArr.name[1]);

// declare a object inside an array
var objArr = [
    'Rahim',
    {
        name: 'Karim',
        age: 21,
        job: 'Student'
    },
    'Bangladesh'
]
console.log(objArr[1].job)