function calculateLoan() {
    loanAmount = document.getElementById('loan-amount').value;
    interestRate = document.getElementById('interest-rate').value;
    durationMoths = document.getElementById('duration-months').value;

    interest = (loanAmount * (interestRate/100))/durationMoths

    monthlyPayment = (loanAmount/durationMoths + interest).toFixed(2);

    document.getElementById('payment').innerHTML = `Monthly Payment: ₦${monthlyPayment}`;
    
}