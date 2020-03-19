// const sayHello = function() {
//     console.log('Hello');
// }


// const sayHello = () => {
//     console.log('Hello');
// }

// const sayHello = () => console.log('Hello');

// const sayHello = () => 'Hello';


// // Return object
// const sayHello = () => ({msg: 'Hello'});

// One parameter does not need () brackets
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple parameter need brackets ()
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('brad', 'good');


const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//     return name.length;
// });

// const nameLengths = users.map((name) => {
//     return name.length;
// });

const nameLengths = users.map(name => name.length);

console.log(nameLengths);