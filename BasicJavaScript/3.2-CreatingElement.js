// Create Element


// Create LIST ELEMENT and add it to the TASK LIST
const li = document.createElement('li');

// Add Class
li.className = 'collection-item';

// Note it will create <li class='collection-item'></li>

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title','New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// In here we can append LI as child to UL
// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

// Create new link element
const link = document.createElement('a');
// Add Classes
link.className = 'delete-item secondary-content';
// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);
// LINK is the cross x mark. List is the list of the Hello World.


console.log(li);


