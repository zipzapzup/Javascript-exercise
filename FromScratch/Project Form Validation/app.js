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
    const zip = document.getElementById('Zip');
    const re = /^[0-9]{4}$/;

    if(!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');

    }

    
}

function validateEmail() {
    const email = document.getElementById('Email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    // Mental form: for email test@test.com will be constructed by 3 REgex
    // ()@()\.()
    // ([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)()
    if(!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');

    }

    
}

function validatePhone() {
    const phone = document.getElementById('Phone');
    const re = /^(\+61+)([42]+)\d{7}$/;
    const re2 = /^(0[42])\d{8}$/;
// For US const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/

    if( re.test(phone.value) || re2.test(phone.value) ) {
        phone.classList.remove('is-invalid');
    } else {
        phone.classList.add('is-invalid');
    }

}
