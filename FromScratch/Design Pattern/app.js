// Module Pattern
// Revealing Module Pattern
// IIFE (Immediately Invoked Expressions)

// (function () {
//     // Declare private vars and functions

//     return {
//         // Declare public var and functions

//     }
// })();



//Standard Module Pattern
// const UICtrl = (function(){

//     let text = 'Hello World';
//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         callChangeText: function() {
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();


// // REVEALING MODULE PATTERN
// const ItemCtrl = (function() {
//     let data = [];

//     function add(item) {
//         data.push(item);
//         console.log('Item Added....');
//     }

//     function get(id) {
//         return data.find(item => {
//             return item.id === id;
//         });

//     }

//     return {
//         add: add,
//         get: get
//     }
// })();

// ItemCtrl.add({id: 1, name: 'John'});
// console.log(ItemCtrl.get(1));





// SINGLETON PATTERN
// A singleton object can only return one object at a time.
// Repeated instance will return just one.
// One user object created at a time because this object is a referential type.
// My guess is that this will save a lot of memory usage since the instanceA is equal to instanceB


// const Singleton = (function() {
//     let instance;

//     function createInstance() {
//         const object = new Object({name:'Brad'});
//         return object;
//     }

//     return {
//         getInstance: function() {
//             if(!instance){
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     }
// })();

// const instanceA = Singleton.getInstance();
// const instanceB = Singleton.getInstance();

// console.log(instanceA === instanceB);
// // console.log(instanceA);



// FACTORY PATTERN
// Often used to manage, maintain and manipulate collections of object.

// function MemberFactory() {
//     this.createMember = function(name, type) { 
//         let member;

//         if(type === 'simple') {
//             member = new SimpleMembership(name);
//         } else if (type === 'standard') {
//             member = new StandardMembership(name);
//         } else if (type === 'super') {
//             member = new SuperMembership(name);
//         }

//         member.type = type;

//         member.define = function() {
//             console.log(`${this.name} (${this.type}): ${this.cost}`);
//         }

//         return member;
//     }

// }


// const SimpleMembership = function(name) {
//     this.name = name;
//     this.cost = '$5';
// }



// const StandardMembership = function(name) {
//     this.name = name;
//     this.cost = '$15';
// }



// const SuperMembership = function(name) {
//     this.name = name;
//     this.cost = '$25';
// }

// const members = [];
// const factory = new MemberFactory();

// members.push(factory.createMember('John Doe', 'simple'));
// members.push(factory.createMember('John', 'simple'));
// members.push(factory.createMember('Kelvin', 'super'));
// // console.log(members);

// members.forEach(function(member) {
//     member.define();
// })

// Above patterns is good when an object shares similar properties


// Observer Pattern



// BUTTON and OBSERVER PATTERN
// Pattern is that you are 
class EventObserver {
    constructor() {
        this.observers = [];        
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    }

    unsubscribe(fn){

        // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
        this.observers = this.observers.filter(function(item){
            if(item !== fn) {
                return item
            }
        });
        console.log(`You are now unsubscribed from the ${fn.name}`);
    }

    fire() { 
        this.observers.forEach(function(item) {
            item.call();
      });
    }
}

EventObserver.prototype = {

    subscribe: function(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },

    unsubscribe: function(fn){
        // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
        this.observers = this.observers.filter(function(item){
            if(item !== fn) {
                return item
            }
        });
        console.log(`You are now unsubscribed from the ${fn.name}`);
    },

    fire: function() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
}


const click = new EventObserver();

// Event Listeners for Milliseconds

document.querySelector('.sub-ms').addEventListener( 'click', 
function () {
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener( 'click', 
function () {
    click.unsubscribe(getCurMilliseconds);
});

// Event Listeners for Seconds

document.querySelector('.sub-s').addEventListener( 'click', 
function () {
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener( 'click', 
function () {
    click.unsubscribe(getCurSeconds);
});
// Event Listener for Fire

document.querySelector('.fire').addEventListener( 'click', 
function () {
    click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
    console.log(`Current Milliseconds: ${ new Date().getMilliseconds()}`);
}


// How this work is that the 
// 1. Subscribe functioin will push the function into the Array
// 2. Once you click Fire, it will call the function in list
// 3. Unsubscribe will actually filter the function,

const getCurSeconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}