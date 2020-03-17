// Event listener for customer A button
document.getElementById('button1').addEventListener('click', loadCustomer);

// Event listener for Customer B button
document.getElementById('button2').addEventListener('click', loadCustomers);


// Load single Customer A
function loadCustomer(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','customer.json',true);
    xhr.onload = function(){
        if(this.status === 200){    
            console.log(this.responseText);
            const customer = JSON.parse(this.responseText);

            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Name: ${customer.company}</li>
                <li>Name: ${customer.phone}</li>
            </ul>  
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();

}

// Load customers B

function loadCustomers(e){

    const xhr = new XMLHttpRequest();
    xhr.open('GET','customers.json',true);
    xhr.onload = function(){
        if(this.status === 200){    
            
            const customers = JSON.parse(this.responseText);
            console.log(customers);
            let output = '';
            customers.forEach(function(customer){
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Name: ${customer.company}</li>
                    <li>Name: ${customer.phone}</li>
                </ul>  
                `;


            });



            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.send();




}