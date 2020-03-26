// Iterator

function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < names.length ? 
            { value: names[nextIndex++ ], done: false } : 
            { done: true }
        }

    }

}
// Create Array names
const namesArr = ['John', 'Jack', 'Jill'];

// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next());
console.log(names.next());
console.log(names.next());



// Generator 
function* sayNames() {
    yield 'Robot1';
    yield 'Robot2';
    yield 'Robot3';

}

const robot = sayNames();

console.log('Generator:', robot.next())




// ID Creator
function* createIDs() {
    let index = 0;

    while(true) {
        yield index++;        
    }
}

const gen = createIDs();
console.log(gen.next().value);