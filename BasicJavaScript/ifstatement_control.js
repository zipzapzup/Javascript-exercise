// if(something){
//     do something
// }   else {
//     do something else
// }
// If statement SYNTAX above

const id = `100`;

// EQUAL TO
if(id == 100){
    console.log('correct');
} else {
    console.log('incorrect');
}

// NOT EQUAL TO
if (id !=  101){
    console.log('correct 101');
} else {
    console.log('incorrect 101');
}

// EQUAL TO VALUE & TYPE
if (id !== 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// NOTE use === to ensure the TYPE is the same as well. Return correct when the value and type MATCHES

// const id2 = 1000;

if(typeof id2 !== 'undefined'){
    console.log(`The ID is ${id2}`);
} else {
    console.log('No ID')
}
// Use the above method to test for a type of or to catch for an undefined variable
// When the type matches to undefined, then it will move to the else statement

id3 = 300;
// Greater or Less Than
if (id3 >= 200){
    console.log('Correct');
} else {
    console.log('Incorrect');
}



//  ELSE IF
const color = 'green';

if(color === 'red'){
    console.log('Color is red');
} else if(color === 'blue') {
    console.log('Color  is blue');
} else if(color !== 'red' & color !== 'blue'){
    console.log('color is not red and not blue');
}

// LOGICAL OPERATORS

const name = 'steve';
const age = 25;

// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}


// OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}


// TERNARY OPERATOR

// Ternary operator isi the use of ? and : to quickly create a conditional statement
// Syntax Format is:   (id === 5 ? 'IF CORRECT' : 'IF NOT CORRECT')
id5 = 100;
console.log(id5 === 100 ? 'CORRECT' : 'INCORRECT');


// Conditional Statement Without Braces
if(id5 === 100)
    console.log('Correct');
else   
    console.log('Incorrect');


    