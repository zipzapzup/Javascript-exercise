const firstName = 'Jake';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there, my name is Brad';
const tags = 'web design, web development, programming';


let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversky';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping 
val = 'That\'s awesome, I can\'t wait' // use 1 back slack \

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Uppercase
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// IndexOf()
val = firstName.indexOf('e');
val = firstName.lastIndexOf('e');

// chatAt()
val = firstName.charAt('2');

// Get Last Char (FORMULA)
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0,4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(0,-2);

// split() Split the variables into an array, based on the key.
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes()  // Return True or False, if the string is there or not
val = str.includes('Hello');

console.log(val)