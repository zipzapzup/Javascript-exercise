// Listen for submit

document.getElementById('loan-form').addEventListener('submit', calculateResults)


// Calculate Results

function calculateResults(e){
    console.log('Calculating...');
    // UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('amount');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');


    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute monhtly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    

    e.preventDefault();
}