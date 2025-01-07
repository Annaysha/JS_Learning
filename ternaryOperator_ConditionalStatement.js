//conditional operators/ternary operators
//(.. ? .. : ..)
var a = 10;
var b = 20;
var c = a > b ? "a is greater than b" : "a is less than b"; 
console.log(c);

//tyoeof operator
var a = 10;
console.log(typeof (a));

//typeof operator with return value


//Type    typeof    
Number = 'number';
String = 'string';
Boolean = 'boolean';
Object = 'object';
Function = 'function';
Undefined = 'undefined';
Null =      'object';



// three types of conditional statement
// if statement
// if...else statement
//if...else if...else statement

// if statement
// if (4 > 8){
//     console.log('4 is greater than 8');
// }else {
//     console.log('4 is less than 8');
// }


// var myName = 'shorove';
// if (myName === 'shorov'){
//     console.log('my name is shorove')}
//     else{console.log('my name is not shorove')};



// var myAge = 20;
// if (9 > 10){
//     console.log('Good to go')};
// if (myAge >= 20){
//     console.log('You are an adult')};
// if (myAge <= 20){
//     console.log('You are a teenager')};


// if (!(myAge > 20) && myAge < 60){
//     console.log('You are a young person')
//     };



// if...else if statement
// if...else if statement
// var whatDay = 'sunday';
// if (whatDay === 'Friday'){
//     console.log('Today is holiday');
// } else if(whatDay === 'Saturday'){
//     console.log('Today is partially holiday');
// } else if(whatDay === 'sunday'){
//     console.log('Today we have a meeting');
// }else {
//     console.log('Today is a working day');
// }



// nesting conditional statement
// var num = 10;
// if (num > 1){
//     if(num > 10){
//         console.log('num is greater than 10');
//     }else {
//         console.log('somewhere between 2 - 10');
//     }
// }




//switch-case statement
var weekDay = 'friday';
switch (weekDay) {
    case 'saturday':
        console.log('Saturday ! Today is closed');
        break;
    case 'sunday':
        console.log('Sunday ! It is a normal working day');
        break;
    case 'monday':  
        console.log('Monday ! It is a normal working day');
        break;
    case 'tuesday':
        console.log('Tuesday ! It is a normal working day');
        break;
    case 'wednesday':
        console.log('Wednesday ! It is a normal working day');
        break;
    case 'thursday':
        console.log('Thursday ! It is a normal working day');
        break;
    case 'friday':
        console.log('Friday ! Today is closed');
        break;
    default:
        console.log('Invalid day');
}