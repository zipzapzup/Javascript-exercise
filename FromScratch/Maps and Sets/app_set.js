// Sets - store UNIQUE values of anything

const set1 = new Set();

// {} = Object
// [] = Array (list)
// new Set();

// Add values to the set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);

// const set2 = new Set([1, true, 'string']);
// console.log(set2);


//
console.log(set1);

//get count
console.log(set1.size);

// Check values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({name: 'John'})); // Its false because object {} is just a reference value

// Delete from set
set1.delete(100);
console.log(set1);

// Iterate through sets


// For..of 
for(let item of set1) {
    console.log(`SETSS: ${item}`);
}

// ForEach Loop
set1.forEach((value) => {
    console.log("ForEach", value);
})

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);