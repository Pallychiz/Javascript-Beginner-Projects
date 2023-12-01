const currencyFirst = document.getElementById('currency-first');
const currencySecond = document.getElementById('currency-second');
const worthFirst = document.getElementById('worth-first');
const worthSecond = document.getElementById('worth-second');
const exchangeRate = document.getElementById('exchange-rate');

const API_KEY = '3040bf4085510f1a723d0977'

updateRate();

function updateRate(){
    exchangeRate.innerText = '';
    try {
        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currencyFirst.value}`
        )
        .then((res)=>res.json())
        .then((data)=> {
            const rate = data.conversion_rates[currencySecond.value];
            
            worthSecond.value = (rate * worthFirst.value).toFixed(2);

            exchangeRate.innerText = `${worthFirst.value} ${currencyFirst.value} = ${(worthSecond.value)} ${currencySecond.value}`;

        }); 
    } catch (error) {
        console.log(error);
        exchangeRate.innerText = 'An error occured! Try again later';
    }
}

currencyFirst.addEventListener('change', updateRate);

currencySecond.addEventListener('change', updateRate);

worthFirst.addEventListener('input', updateRate);