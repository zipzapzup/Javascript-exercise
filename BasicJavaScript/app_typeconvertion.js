// SECTION 1: Type Conversion
// Type conversion is a way to change the data types from one variable to another.
// One examples is to convert a string to a number

// In this example, we are using let to define the variable val.

// Converting number to string
// We use the method String(9898) 


let val;

// Number to String
val = String(5);
val = String(4+4);
// Bool to String
val = String(true);
// Date to String
val = String(new Date());
// Array to String
val = String([1,2,3,4,5]);

// toString()
val = (5).toString();
val = (true).toString();

// Output Checking Methods
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// Length is a string properties. If val is not a string, then it will produce Undefined.


// String to number
// Provides you with a different output, a true give you 1
// A false gives you 0
// However, if its not covertable, then it will give you a NaN
val = Number('5');
val = Number(true);     // Output: 1
val = Number(false);    // Output: 0
val = Number(null);     // Output: 0 
val = Number('hello');  // Output: NaN  which means (Not a Number)
val = Number([1,2,3]);  // Output: NaN  which means (Not a number)

val = parseInt('100.3');    // Parse Int will parse it as a whole integer
val = parseFloat('100.30'); // Parse Float will give you a Float decimal 


console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));


const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
console.clear();