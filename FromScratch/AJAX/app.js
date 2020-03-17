// Add event Listener

document.querySelector('#button').addEventListener('click', loadData);


function loadData(){
    // Create XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET','data.txt',true);
    //     console.log('READYSTATE', xhr.readyState)

    // Optional - used for spinners / loaders
    xhr.onprogress = function (){
        console.log('READYSTATE', xhr.readyState);
        // READY STATE 3 - because its on progress
        document.querySelector('#output').innerHTML = `
        <h1>${this.responseText}</h1>`


    }

    // on load is always when READYSTATE is at 4: request finished and response is ready.

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);

        }

    }

    // xhr.onreadystatechange = function () {
    //     console.log('READYSTATE', xhr.readyState);

    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);

    //     }

    // }
    xhr.onerror = function() {
        console.log('Request error...');

    }

    xhr.send();


    // readystate Values
    // 0: request not initialised
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response ready


    // HTTP STATUS
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"

}