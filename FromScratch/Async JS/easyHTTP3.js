
// Version 3

class EasyHTTP {
    // Version 3
    // Make HTTP GET Request
    // Note first then is taking the json from the response server is giving you.
    // Second then will log it to the console.
    async get(url) {
        const response = await fetch(url);

        const resData = await response.json();
        return resData;
    }

    // Version 3
    // Make HTTP POST Request
    // await function is only available on an async function

    async post(url, data){ 
        const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        const resData = await response.json();
        return resData;
    }



    // Make HTTP PUT Request
    async put(url, data) {
        const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        const resData = await response.json();
        return resData;
        }
    
    // Make HTTP Delete Request
    async delete(url) {
        const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
            });
        
        const resData = await 'Resource deleted';
        return resData;
        }
}