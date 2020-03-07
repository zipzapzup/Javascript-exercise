// Create the UI Apps

// Define UI Variable
const form = document.querySelector('#task-form');
// Task form is the Task Kelvin List form at the top
// Above variable will grab the task Kelvin List

const taskList = document.querySelector('.collection');
// Collection are the <ul> in the HTML (unordered bullet poitns)
// taskList Javascript variable will grab the ul

const clearBtn = document.querySelector('.clear-tasks');
// Clear button refers to the button to clear the tasks

const filter = document.querySelector('#filter');
// Filter is to filter the tasks there

const taskInput = document.querySelector('#task');
// Task input is underneath the task kelvin list.
// Inputting the task.


// Load all event listeners
loadEventListeners();


// Load all event listeners
function loadEventListeners() {
    // Add task event. An event listener to listen to the submit event and execute addTask
    form.addEventListener('submit', addTask );
}

// Add task button, all of the function
// Function Brief
// This function will add HTML elements to the <ul> in the collection class.
// A few things that will be added
// 1. Create the list with the element value
//    Append the taskInput the value inside of it
// 2. Create the link element
//    As part of materialise CSS, add the X link element
// 3. Append the list to ul in the list
//    Clear the taskInput value after adding.


function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a task');
    }
    // Part1
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Part2
    // Create new link element
    const link = document.createElement('a');
    // Add class 
    // Note: secondary content and delete item is the x button on materialise CSS, secondary content will place it to the right.
    link.className = 'delete-item secondary-content';
    // Add icon html through the i class
    // Note: fa fa-remove is the x mark icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);


    //Part3
    //Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
    console.log(li);


    e.preventDefault();
}