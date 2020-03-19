// async function MyFunc() {


//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });

//     const error = true;

//     if(!error){
//         const res = await promise; // wait til promise is resolved
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }
// }

// // Async function will return a promise
// MyFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// async function getUsers() {
//     // await response of the fetch call
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     // Only proceed once its resolved
//     const data = await response.json();

//     // Only proceed once second promise is resolved
//     return data;
// }

// getUsers().then(users => console.log(users));




// Fetch with ASYN Part 4
const http = new EasyHTTP;

const data = 
    {
        "name": "Pasukan satu",
        "username": "pasukans",
        "email": "pasukan@gmail.com"
    }

// Get Users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));


// POST - Create Users

http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// PUT - Update Data
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// DELETE - remove users
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));