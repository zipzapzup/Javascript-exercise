// // Iterator

// function nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next: function() {
//             return nextIndex < names.length ? 
//             { value: names[nextIndex++ ], done: false } : 
//             { done: true }
//         }

//     }

// }
// // Create Array names
// const namesArr = ['John', 'Jack', 'Jill'];

// // Init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next());
// console.log(names.next());
// console.log(names.next());



// // Generator 
// function* sayNames() {
//     yield 'Robot1';
//     yield 'Robot2';
//     yield 'Robot3';

// }

// const robot = sayNames();

// console.log('Generator:', robot.next())




// // ID Creator
// function* createIDs() {
//     let index = 0;

//     while(true) {
//         yield index++;        
//     }
// }

// const gen = createIDs();
// console.log(gen.next().value);




const data = [
    {
        name: 'Jenny KIM',
        age: 30,
        gender: 'female',
        interestedin: 'male',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/women/14.jpg'
    },
    {
        name: 'Jen Smith',
        age: 24,
        gender: 'female',
        interestedin: 'male',
        location: 'Washington WDC',
        image: 'https://randomuser.me/api/portraits/women/42.jpg'
    },
    {
        name: 'Jennie Blackpink',
        age: 24,
        gender: 'female',
        interestedin: 'male',
        location: 'Seoul SIA',
        image: 'https://randomuser.me/api/portraits/women/70.jpg'
    }
]

const profiles = profileIterator(data);

nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);



// Next profile Display
function nextProfile(){

    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Looking for: ${currentProfile.interestedin}</li>
        <li class="list-group-item">location: ${currentProfile.location}</li>
    </ul>   
    `;
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        // No more profiles
        window.location.reload();
    }
}


// profile iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false} : 
            { done: true }
        }
    };

}