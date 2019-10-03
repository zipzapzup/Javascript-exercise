// Section 1:
// 1.1 JavaScript: var, let, const

// var name = 'John Doe';
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// // Init var
// // Undefined means that variable has been defined but not assigned a value.
// // It is important to ensure it is assigned
// // Line 14 will display undefined
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // Variables cannot be letters, numbers, _, $
// // Must not start with numbers

// // Multi Word vars
// var firstName = 'John'; // Camel Case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; //Pascal Case
// var firstname;

// Creating Variables
// Hoisting in Javascript:
// Hoisting is a Javascript mechanism where variables and function declarations moved to top of scope, before execution. 
// This is true regardless of whether their scope is global or local.
// For example: Any var placed under the documents, will be loaded first

// ES6 JavaScript Variables Declaration Differences:
// VAR: Let you define a variables and reuse the variables, throughtout your code blocks. It is generally loaded under the hoisintg rule, Where all Var command are loaded first into memory before function execution. 
//      However, there are many problems with var, if you are re-using the same variables through out the code, it will introduce many bugs in your code.
// LET: Is a method to declare variables, which is block scoped that is bounded by {}. A variable that is declared in block with `let` is only available in use within block.
//      LET can be updated, but not re-declared. Once a variable is declared by LET, you can modify it, however it cannot be re-declared.
//      Only exceptions is when you define LET in different block scopes, there will be no error.
//      Hoisting of LET is that it is not initialised, if you use LET before declaration, you will get a Reference Error.
// CONST: Variables declared by Const maintain constant values. Declarations are block scope.
//      Important features of CONST is that it cannot be updated or re-declared. 
//      Important distinction of CONST is that dealing with Objects, whilst the Objects will be immutable, the properties can be updated.

// ES6 MAIN POINTS:
// - Var are Global scoped, LET and CONST are block scoped
//
// - VAR can be updated and re-declared. 
// - LET can be updated and NOT Re-declared
// - CONST cannot be updated and NOT re-declared 
// 
// - All Hoisted to top of scope, while VAR are initialised with undefined, Let and Const are not initialised.
// - VAR and LET can be delcared without initialised, CONST must be initalised during declaration.
// Reference: https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e

// LET 
// // LET
// let name;
// name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// CONST
// const name = 'John';
// console.log(name);
// name = 'Sara';
// Cannot be re-assigned
// Have to assign a value
// Properties on the object can be mutated or values changed

const person = {
    name: 'John',
    age: 30
}
person.name = 'Sara';
person.age = 35;
//console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);
//console.log(numbers);

// CONST is immutable, it cannot be re-assigned. 
// Once a variable is declared, it will stay the same.
// Using Const can have its properties changed.


// Section 1
// 1.2 

// Data Types
// In Javascript, there are 2 data types:
// 1. Primitive Data Types: Stored directly in the location variable accesses
// Stored on stack

// Primitve Data Types (6):
// A. String
// B. Number
// C. Boolean
// D. Null
// E. Undefined
// F. Symbols (ES6)

// 2. Reference Types
// Accessed by reference
// Stored on HEAP or a pointer to a location in memory

// Refence Data Types (5)
// A. Arrays
// B. Object Literalys
// C. Functions
// D. Dates
// E. Others

// Javascript is dynamically typed language. Same Variable into multiple types
// TypeScript is a super


// IN THIS SECTION, we will list the different types of Data Types.
// Using typeof method in javascript, it will show the data type of these.

//PRIMITIVE

//1.STRING
const name2 = 'John Doe';
// console.log(name2);


//2.NUMBER
const age = 45;
// console.log(age);


//3.BOOLEAN
const hasKids = true;
// console.log(hasKids);


//4.NULL : Note that in Javascript you get Object, but an object that is 0 is actually null. Its a bug.
const car = null;
// console.log(car);

//5.UNDEFINED
let test;
// console.log(test);

//6.SYMBOL
const sym = Symbol();
// console.log(sym);


// REFERENCE TYPES - Objects

// 1.ARRAY
const hobbies = ['movies','music'];
// console.log(hobbies);

// 2.Object Literal
const address = {
    city: 'Boston',
    State: 'MA'
};
// console.log(address);

// 3.Date
const today = new Date();
// console.log(today);
// console.log(typeof  today);


