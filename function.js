// function structure

// function statement
// function funName1(){
//     // code/statements
// }

// // function expression
// var funName2 = function(){
//     // statement/code
// }

// funName1(); // function call
// funName2(); // function call

// function funName3(){
//     console.log('Hello World');
// }
// funName3();

// var funName4 = function(){
//     console.log('hello i am from the function4');
// }
// funName4();


// summation function
// function sumMachine(a, b){  // a, b are parameters
//     var sum = a + b;
//     return sum;
// }
// var result = sumMachine(100, 200); // arguments
// console.log('sum of two numbers :' , result);


//how to pass a function as a argument
function callMyName(name, callback){
    var myAge = 20;
    callback(myAge);
    console.log('Hello', name);
}
function hello(age){
    console.log('I am passed through a function as argument and my age is :', age);
}
callMyName('shorove', hello);