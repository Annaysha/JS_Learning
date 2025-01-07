// loop
// 1. for loop
//2. do...while loop
//3. while loop
//4. break statement
//5. continue statement


// // 1. for loop
// for(var i = 0; i < 10; i++){
//     console.log('Go ' + i + ' step');
// }


// // 2. do...while loop
// var num = 15;

// do{
//     console.log('Inside the loop, num is:' + num);
//     num = num + 1;  //num++
// }while(num <= 20)
// console.log('Outside the loop, num is:' + num);

// // 3. while loop
// var num = 15;
// while(num < 10){
//     console.log('Inside the loop');
//     num = num + 1;
// }
// console.log('Outside the loop');


// // 4. break statement
// for(var i = 0; i < 10; i++){
//     if(i === 5){
//         break;
//     }
//     console.log('i is now at:' + i);
// }

// 5. continue statement
for(var i = 0; i < 10; i++){
    if(i === 5){
        console.log(i + 'is skipped');
        continue;
    }
    console.log('i is now at:' + i);
}







// array declaration
// first way
var arrayName = new Array('Rahul', 'Raj', 'Rohan', 'Ravi');
// console.log(arrayName);

// second way
var arrName = ['Rahul', 'Raj', 'Rohan', 'Ravi'];
// console.log(arrName);
// console.log(arrName[1]);
// console.log(arrName.length);

// dot notation and bracket notation
// console.log(arrName.length);
// console.log(arrName['length']);


// for (var i = 0; i < arrName.length; i++) {
//     console.log(arrName[i]);
// }


// add value at the last index of array
//push() method
arrName.push('shorove');
console.log(arrName);

//remove item from the first index of array
//shift() method
arrName.shift()
console.log(arrName);

//add value at the first index of array
//unshift() method
arrName.unshift('tajmen');
console.log(arrName);

// know the specific index of array's value
//indexOf() method
console.log(arrName.indexOf('Raj'));


//remove value from the specific index of the array
//splice() method
var secondArray = arrName.splice(1, 2)
console.log(secondArray);