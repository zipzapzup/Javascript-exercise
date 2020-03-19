const http = new EasyHTTP;

// Get Users

http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));

// POST Users


// User Data
const data = {
    name: "John Doe",
    username: "johndoe",
    email: "jdoe@gmail.com"

}

// POST Add Data Creating Users
http.post('https://jsonplaceholder.typicode.com/users', data)  
    .then(data => console.log(data))
    .catch(err => console.log(err));


// PUT Update User 2
http.put('https://jsonplaceholder.typicode.com/users/2', data)  
    .then(data => console.log(data))
    .catch(err => console.log(err));


// DELETE delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')  
    .then(data => console.log(data))
    .catch(err => console.log(err));
