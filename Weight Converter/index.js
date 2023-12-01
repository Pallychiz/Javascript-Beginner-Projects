const input = document.getElementById('input');
const error = document.getElementById('error');
const result = document.getElementById('result');

let errorTime;
let resultTime;

error.innerText = '';
result.innerText = 0;

function updateResult(){
    if(input.value <= 0 || isNaN(input.value)){
        error.innerText = 'Please enter a valid number!'
        clearTimeout(errorTime);
        errorTime = setTimeout(()=>{
            error.innerText = '';
            input.value = '';
        }, 2000)
    }else{
        error.innerText = ''
        // the + sign converts the input to number always
        result.innerText = (+input.value/2.2).toFixed(2)

        clearTimeout(resultTime);
        resultTime = setTimeout(()=>{
            result.innerText = '';
            input.value = '';
        }, 10000)
    }
}

input.addEventListener('input', updateResult);