// DOM
// Document Object Model
// Tree of nodes created by browser
// JavaScript can be used to read/ write/ manipulate DOM
// Object Oriented Representation

// Root element is Document
// Root Element after wards is html
// After: Head, BODY
// After: Element; Attribute, Element

// Vanilla JavaScript - using plain JavaScript without any additional site.

// Examining Document Object

// https://materializecss.com/

let val;
val = document;
val = document.all;
val = document.all[0];
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// Forms in document refers to the HTML Form
val = document.forms;
val = document.forms.id;
val = document.forms.action;

// Links
val = document.links;
val = document.links.id;
val = document.links.className;
val = document.links.classList;

// Images
val = document.images;

// Scripts
// Using Vanilla JS to obtain the attributes

val = document.scripts;
val = document.scripts[0].getAttribute('src');

let scripts = document.scripts;

// Create Let Variable of ScriptsArr from scripts, and convert to Array
let scriptsArr = Array.from(scripts);

// Since its an Array, use a forEach method for looping
scriptsArr.forEach(function(script){
    console.log(script);
})


console.log(val);

// document gives you the entire HTML
// val = document;
// console.log(val);

