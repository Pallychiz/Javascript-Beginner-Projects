const btn = document.getElementById("btn");
const input = document.getElementById("birthday");
const result = document.getElementById("result");

input.value = "";
result.innerText = "";

function calculateAge(){
    let birthdayValue = input.value;
    if(birthdayValue === ""){
        alert("Please Enter Your Birthday!")
    }else{
      let  age = getAge(birthdayValue)
    }
    //If age > 1, say Years, else say Year 
    result.innerText = `Your Age is ${age} ${age > 1 ? "Years" : "Year"} Old!`;
    input.value = "";
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthDate = new Date(birthdayValue);
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(birthdayValue).getFullYear();
    const currentMonth = new Date().getMonth();
    const birthMonth = new Date(birthdayValue).getMonth();

    age = currentYear - birthYear;
    const month = currentMonth - birthMonth;
 //To consider the month and day
    if(month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())){
        age--;   
        }

        if (currentYear < birthYear || (currentYear === birthYear && currentDate.getMonth() < birthDate.getMonth()) || (currentYear === birthYear && currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
            invalidDate();
        }
    
    //return age; 
}

function invalidDate(){
    alert("Please Enter a Valid Birthday!");
        input.value = "";
        result.innerText = ""; 
    }

btn.addEventListener("click", calculateAge);
