// Traversing DOM
// Is a method to travel the DOM

let val;

// take list as the ul.collection class
const list = document.querySelector('ul.collection');

// Below method will get the last item in the list collection
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes of all list
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[4].nodeType;

// nodeName get the node
// nodeType get the type

// Node Type are:
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node (it can count as linebreak)
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes: Return the HTML Collections.
val = list.children;
val = list.children[1].textContent = 'Hello';
// Children of children
val = list.children[3].children[0].id = 'test-link';

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count Child Elements
val = list.childElementCount;

// Get parent  node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
val = listenItem.previousElementSibling;
val = listenItem.previousElementSibling;

console.log(val);

