// Create arrays
// 2 methods to create Array

// Method 1 Array Normal method
const numbers = [43,56,33,23,44,36,5];
// Method 2 Array constructors
const numbers2 = new Array(22,45,33,76,54);

const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;


// Array Methods

// GET ARRAY LENGTH
val = numbers.length;
// CHECK ARRAY TYPE
val = Array.isArray(numbers);
// RETURN ARRAY VALUE
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// FIND INDEX Value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// Add on to end of ARRAY
numbers.push(250);
// Add on to front of ARRAY
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values depending on the value
numbers.splice(1,3);
// Reverse
numbers.reverse();

// Concatenate array [ Add the Array together ]
val = numbers.concat(numbers2);

// Sorting Arrays NOTE FOR NUMBERS it only sort the first digit
fruitss = fruit.sort();
val = numbers.sort();

// Use the "compare functions" to sort 2 digits
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Above links contains details
// Create a call back to the compare

// Sort convers array into strings and sorted according to UTS-16 code orders


// Use "compare function algorithm" to sort numbers from highest to lowest
val = numbers.sort(function(x , y){
    return x - y;
});
// Reverse sort
// sort from lowest to highest value.
val = numbers.sort(function(x,y){
    return y - x;
});

// Find
function under50(sum){
    return num < 50;
};

val = numbers.find(under50);

console.log(fruitss);
console.log(val);


// Sort Compare Algorithm how it works: https://stackoverflow.com/questions/6567941/how-does-sort-function-work-in-javascript-along-with-compare-function

