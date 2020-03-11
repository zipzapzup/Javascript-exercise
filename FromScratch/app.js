// Create the UI Apps
// Note In Javascript, look for what the query Selector is selecting.
// It can select a particular
// 1. # = ID
// 2. . = class
// Define UI Variable
const form = document.querySelector('#task-form');
// Task form is the Task Kelvin List form at the top. Its an ID #
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
// ID Task is the input element in the HTML
// It is used to take the text input into Variable: "const taskInput"


// Load all event listeners
loadEventListeners();


// Load all event listeners
function loadEventListeners() {
    // Add task event. An event listener to listen to the submit event and execute addTask
    form.addEventListener('submit', addTask );
    // List of all DOM Event, AKA: Event Listener is in: 
    // https://www.w3schools.com/jsref/dom_obj_event.asp

    // Add Remova task event. An event listener to the delete event. An event when part of the Task List class is clicked, it will delete it.
    taskList.addEventListener('click', removeTask);

    // Add a clear task event. An event when we click the button class will clear it.
    clearBtn.addEventListener('click', clearTask);

    // Add a filter event, when we filter up using the key up.
    filter.addEventListener('keyup', filterTasks);

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
    } else {
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

    }
    e.preventDefault();
}

function removeTask(e){
    if ( e.target.parentElement.classList.contains('delete-item') ){
        if( confirm('Are you Sure you want to Delete?')){
            e.target.parentElement.parentElement.remove();
        }  
    }

}



function clearTask(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
}
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();

    // Note in here query Selector selects all of the collection-item class. Collection-item class is only the one that we created from the addTasks function. Selecting those, mean we select only the tasks here.

    // Further if statement is used to display it. ForEach loop will go and apply the task function, which it will check the textcontent of the collection-item. 
    
    // If the item (to lower case) is in the index of the "text" that is typed. If no match or known as -1, 
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';

        }
    });

}