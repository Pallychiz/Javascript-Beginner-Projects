const button = document.getElementById('calculate');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const totalOutput = document.getElementById('total');

button.addEventListener('click', calculateTotal)


function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + (tipValue)/100);
    // Number().toLocaleString() seperates a number with comma
    totalOutput.innerText = '$'+ Number(totalValue.toFixed(2)).toLocaleString();
}