//DRY --> don't repeat yourself

// dry principle example

function printAText(){
    console.log('this post is written by me');
}
// calling the function
printAText();
printAText();
printAText();


function addTwoNumbers(a,b){
    var sum = a+b;
    console.log('summation of two numbers: ',sum);
}

// calling the function
addTwoNumbers(10,20);
addTwoNumbers(30,40);
addTwoNumbers(50,60);


welcomeMessage();
function welcomeMessage(name){
    console.log('Welcome to ' + name);
}

// calling the function
welcomeMessage('Jui');
welcomeMessage('shorove');
welcomeMessage('sharmin');


// Es6, ECMAScript 6
// execution context --> js e excution context hochhe emon ekta concept, jeta apnar ccurrent code execute hochhe setar all environment related information hold kore.


var a = 10;

