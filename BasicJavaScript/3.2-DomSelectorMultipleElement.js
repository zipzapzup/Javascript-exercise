// 2 Methods in JavaScript for DOM Selector:
// 1. Single Element DOM Selector
// 2. Multiple Element DOM Selector

// For Multiple Elements
// document.getElementsBy ClassName -> The IMPORTANT Method for JavaScript

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// // Above command will return a collection of items from the classes
// // It can be treated as an array.
// // Array can be accessed and changed immediately

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// Difference between the 2 methods are:
// getElementsbyClassName() will display all  of the class items.
// querySelector() will display only the ul part of it, and not class items that is not  part of the ul

// getElementsbyClassName will retrieve variables more complete

// document.getElementsByTagName()
// Part 2 of Multiple DOM Selector:  

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// //  Convert HTML Collection into Array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}:  Hello`;
// });
// console.log(lis);

// Note li and index is an enumerate function
// Printing the index using template literal and changing to hello
// It will yield the following: 1: Hello


// Query Selector ALL -> IS the Better Method
// document.querySelectorAll
// Great thing about Query Selector is that it is already in a node list
// It means that its already in an Array
// All Array methods will work - such as forEach
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    console.log(item.className);
    item.textContent = `${index}: Hello ABC`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
    li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = 'lightblue';
}

console.log(items);