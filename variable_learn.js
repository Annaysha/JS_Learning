var person = "shorove";
console.log(person);

var person2 = "shorove";
console.log(person2);

// var myName = "shorove";
// console.log(myName);

//Primitive data types
// Number data type
var age = 23;
var age2 = 23.5;
console.log(age, age2);

// String data type
var myName = "shorove";
console.log(myName);

// Boolean data type
var isTrue = true;
var isFalse = false;

//undeined variable
var something;
console.log(something);

//null data type
var something2 = null;
console.log(something2);



//concatenation
var text = "how" + " are you?";
var welcoming = "hello " + text;
var test = "10"+10;
console.log(test, typeof(test));
console.log("output", typeof(welcoming));

var complex = 10 + 10 + "some text" + 10;
console.log(complex, typeof(complex));


// chnage varaible value
var myName = "shorove";
console.log('first myName', myName);
myName = "shorove tajmen";
console.log('second my name',myName);


//single line comment and multiline comment
//single line comment

/*
my name is shorove
I am a jr software engineer
email: srvi@gmail.com
*/


// Operators
// Arithmetic operators
var a = 100;
var b = 250;

var sum = a + b;
console.log('summation of a and b', sum);

var x = 10;
console.log(x--); //increment x by 1
console.log(x); //increment x by 1

var y = 10;
console.log('pre incremented',++y);
console.log(y);
// console.log('increment x', x);
// x--; //decrement x by 1
// console.log('decrement x', x);


//comparison operators
var x = 10;
var y = 20;
console.log(x != y) 

var x = 100;
var y = '200';
console.log(x === y);