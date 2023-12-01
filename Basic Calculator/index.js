const buttons = document.querySelectorAll("button");
const inputField = document.getElementById("result");

// Adding event listener to each of the buttons
for (let i=0; i<buttons.length; i++) {
   buttons[i].addEventListener("click", ()=>{
    const buttonValue = buttons[i].textContent;
    
    if(buttonValue==="C"){
        clearResult();
    }else if(buttonValue==="="){
        calculateResult();
    }else if(buttonValue==="Del"){
        deleteLastInput();
    }else{
        appendValue(buttonValue);
    }
   })
}

function clearResult(){
    inputField.value = "";
}

function calculateResult(){
    // Number().toLocaleString() seperates the digits with comma
    inputField.value = Number(eval(inputField.value)).toLocaleString();
}

function appendValue(buttonValue){
    inputField.value += buttonValue;
}

function deleteLastInput(){
    let inputArray  = Array.from(inputField.value);
    inputArray.pop();
    inputField.value = inputArray.join('');
}

