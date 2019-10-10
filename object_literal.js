// Object Literals is creating object with curly bracket.
// Java script object literal is a comma-separated list of name-values pair
// In a curly braces. Object literal encapsulate data, enclosing it in a package.

// person is an object literal
const person = {
    firstName: "Steve",
    lastName: 'John',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music','sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2017 - this.age;
    }
};

// This is a method to access the property of the object literals.
let val;

val = person;
val = person.firstName;
val = person.lastName;
val = person.age;
val = person.hobbies[1];
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

// Sample test of loop.
const people = [
{name: 'John', age: 33},
{name: 'Mike', age: 23},
{name: 'Peter', age: 49},
{name: 'Nancy', age: 30}

];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
};