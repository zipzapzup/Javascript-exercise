// In Vanilla Javascript, 2 DOM Element selectors available
// 1. Single Elements = document.getElementbyID()
// 2. Multiple Elements

// 1. Single Element Selector:
// Obtain Entire HTML Element from the ID
console.log(document.getElementById('task-title'));
// >>  <h5 id="task-title">Tasks</h5>

// Obtain Entire HTML Element Properties (ID / Class) from ID
// console.log(document.getElementById('task-title').id);
// >> task-title
// console.log(document.getElementById('task-title').className);
// >> test


// Change Styling via JS
// document.getElementById('task-title').style.background = 'black';
// document.getElementById('task-title').style.color = 'white';
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';


// Change Content via JS
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style="colorr:red">Task List</span>';


// document.querySelector() JQuery (JavaScript Query)
// Query Selector is a JavaScript DOM Selector to select single elements
// It works by selecting the first elements
// Which can be further enhanced through CSS SUDO Class, to select specific lines
// QUERY SELECTOR is ONE EXAMPLE of SINGLE ELEMENT SELECTOR


console.log(document.querySelector('#task-title')); // # is Querying ID
console.log(document.querySelector('.card-title')); // . is Querying Class
console.log(document.querySelector('h5')); // is Querying the elements

// Note JQuery only returns the first item from the selector
// We can however, select multiple elements

// Below code will make changes almost immediately
document.querySelector('li').style.color = 'red'; // Single element
document.querySelector('ul li').style.color = 'blue'; // Nested element

// Use CSS SUDO Classes to select the last child
document.querySelector('li:last-child').style.color = 'red';

// Use CSS SUDO Classes nth child(3) to change color
document.querySelector('li:nth-child(3)').style.color = 'yellow';

// Use CSS SUDO Classes nth child(4) to change text content
document.querySelector('li:nth-child(4)').textContent = 'Hello World';


// Note specifying ODD or EVEN, applies to the first element ONLY
// This is due to the querySelector 
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#ccc';
