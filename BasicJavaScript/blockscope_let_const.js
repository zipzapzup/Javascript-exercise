// GLOBAL Scope
var a = 1;
let b = 2;
const c = 3;

// function test(){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ', a ,b, c);

// }
// test();
// Variables are different inside a function, and when defined globally


// if(true){
//     // Block Scope
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log("IF Scope: ", a, b, c)
// }
// Note that when executing IF, the block scope change
// Inside block scope, the A changes to 4 in Global


// for(var a = 0; a < 10; a++){
//     console.log(`Loop: ${a}`);

// }
// In a FOR Block Scope, the variable var changes to 10

console.log('Global Scope: ', a, b, c);


