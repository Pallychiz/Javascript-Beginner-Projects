const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock(){
    const currentDate = new Date();
    setTimeout(updateClock, 1000);

//Getting only the hour, minute and second from the Date() function

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

//Converting the time elements into degrees

    const hourDeg = (hour/12) * 360;
    const minuteDeg = (minute/60)*360;
    const secondDeg = (second/60)*360;
   
//Replacing time elements in our CSS using Javascript ${}

    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

updateClock();

//Method 2 for setting interval below (comment out the setTimeOut() and updateClock() methods above)

//setInterval(updateClock, 1000);