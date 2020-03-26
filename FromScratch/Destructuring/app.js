// Destructuring

let a, b;
[a,b] = [100, 200];

[a,b,c, ...rest ] = [100,200,300,400,500];

console.log(rest);


// Array desctructuring

// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3)


// Parse array returned from function

function getPeople() {
    return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

console.log(getPeople());


// Object Destucturing

const soldier = {
    name: 'John',
    age: 30,
    city: 'Sydney',
    gender: 'Male',
    sayHello: function(){ console.log('Hello Commander.');}
}
// Old method
// const name = person.name,
//       age = person.age,
//       city = person.city;


const {name, age, city, sayHello } = soldier;

console.log(name,age, city);
sayHello();