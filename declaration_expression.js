// FUNCTION DECLARATION
// Parameters can be passed into the function


function greet(firstName = 'John', lastName = 'Doe'){
    //  console.log('helo');
//    if(typeof firstName === 'undefined'){firstName = 'John'}
//    if(typeof lastName === 'undefined'){lastName = 'Doe'}
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('John',"doe"));
console.log(greet());


// FUNCTION EXPRESSIONS
// Note the parameter placed in with the = sign is the default

const square = function(x = 3){
    return x*x;
};

console.log(square(64));



// Immediately Invokable Function Expressions - IIFEs
// Function in one line of executions

// (function(){
//     console.log('IIFE Ran...');
// })();

(function(name){
    console.log('IIFE Ran...' + name);
})('Brad');

// PROPERTY METHOD
// First create an object literal for a constant
// Then define the property method
// `` is a template string

const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo.. ${id}`);
    },
    read: function(){
        console.log('Reading..');
    }
}

// Another way to create property method

todo.delete = function(){
    console.log('Delete to do..')
}
todo.add();
todo.edit(50);
todo.read();
todo.delete();



