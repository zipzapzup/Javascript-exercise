// WINDOW is the Client object of JavaScript
// NodeJS is the Server object of JavaScript

// NodeJS is the environment
// Window, browser are the global environment
// Both Window and Chrome are powered by V8 JavaScript Engine
// Includes Method like Fetch, Confirm.

// WINDOW METHODS / OBJECTS / PROPERTIES

// window.console.log(123);

// Alert - window box
// window.alert('hello world');

// Prompt - to type in the browser
// const input = prompt();
// alert(input);

// Confirm - confirm pop out with the message. 
// If they click ok, then it will run
// If they click cancel, then it will say no.
// if(confirm('Are you sure')){
//     console.log('YES');
// }else {
//     console.log('No');
// };


let val;

// Outer height and width - WINDOW Object
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width - WINDOW Object
// Inner only counts the surface area of the content, excluding DEV TOOLS
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // Search is in the browser with ?

// Redirect
// window.location.href = 'http://google.com';
// Reload
// window.location.reload();

// HISTORY OBJECTs

// window.history.go(-2); // This will load the browser to the past history
// val = window.history.length; // You can see the number of history

// NAVIGATOR OBJECT - is the browser itselves
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;





console.log(val);