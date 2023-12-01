const btn = document.getElementById('btn');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const bmiResult = document.getElementById('bmi-result');
const weightCondition = document.getElementById('weight-condition');


btn.addEventListener('click', calculateBMI);


function calculateBMI(){
    const heightValue = height.value / 100;
    const weightValue = weight.value;
    const BMI = weightValue / (heightValue * heightValue);
    bmiResult.value = BMI.toFixed(2);

    if(BMI < 18.5){
        weightCondition.innerText = 'Underweight'
    }else if(BMI < 25){
        weightCondition.innerText = 'Normal'
    }else if(BMI < 30){
        weightCondition.innerText = 'Overweight'
    }else{
        weightCondition.innerText = 'Obessed'
    }
}