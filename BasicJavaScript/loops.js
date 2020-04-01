// FOR LOOP
// SYNTAX: define variable, set the limit, set the iterations

for(let i = 0; i <= 10; i++){
    console.log("Number " + i);
};


// IN LOOP there is CONTINUE and BREAK
// CONTINUE tells the loop to continue the execution
// BREAK will stop the loop cycle
for(let i = 0; i <= 10; i++){
    if(i === 2){
        console.log('2 is my favourite number');
        continue;
    };

    if(i === 5){
        console.log('Stop the loop');
        break;
    };


    console.log('No:' + i);
};

// WHILE LOOP
// On a While Loop, variable needs to be defined first.
// SYNTAX: Create a condition inside the loop
// Be Cautious with WHILE LOOP

let a = 0;
console.log(a);
while(a < 10){
    console.log('Number ' + a);
    a++;
}

// DO WHILE
// In a do while, the do is always executed
// It will always run once even if the condition is not met
// It is why its called DO WHILE.

let i = 100;
do {
    console.log('Numerino ' + i);
    i++;
}
while(i<10);


// LOOP through Arrays
const cars = ['Ford','Chevy','Honda','Toyota'];
for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// LOOP using forEach
// Use the arrays name at the start
// Create a call-able function
// Call back function is the array
cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});

// MAP
// Create an Object, with array of users
// MAP then can be used to group the Array, and return a specific function
// In this case the function will return just the ID
const users = [
    {id: 1, name:'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'},
    {id: 4, name: 'Steve'}
];

const ids = users.map(function(user){
    return user.id
});

console.log(ids);



// FORIN LOOPS
// Used normally for objects


const people = {
firstName:  'John',
lastName: 'Doe',
age: 40
}

for(let x in people){
    console.log(`${x} : ${people[x]}`);
}