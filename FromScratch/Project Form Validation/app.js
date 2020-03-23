// Form Blur Event Listeners
document.getElementById('Name').addEventListener('blur', validateName);
document.getElementById('Zip').addEventListener('blur', validateZip);
document.getElementById('Email').addEventListener('blur', validateEmail);
document.getElementById('Phone').addEventListener('blur', validatePhone);

// Function
function validateName() {
    const name = document.getElementById('Name');
    const re = /^[a-zA-Z]{2,10}$/;

    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');

    }
}

function validateZip() {

    
}

function validateEmail() {

    
}

function validatePhone() {

    
}