const dayEl = document.getElementById('day');
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();

updateCountdown();

function updateCountdown(){
    const timeNow = new Date().getTime();
    const timeDifference = newYearTime - timeNow;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const remainingDays = Math.floor(timeDifference/day);
    const remainingHours = Math.floor((timeDifference % day) / hour);
    const remainingMinutes = Math.floor((timeDifference % hour) / minute);
    const remainingSeconds = Math.floor((timeDifference % minute) / second);

    dayEl.innerText = remainingDays;
    hourEl.innerText = remainingHours;
    minuteEl.innerText = remainingMinutes;
    secondEl.innerText = remainingSeconds;

    if(remainingSeconds < 10){
        secondEl.innerText = '0'+ remainingSeconds;
    }
    if (remainingMinutes < 10) {
      minuteEl.innerText = "0" + remainingMinutes;
    }
    if (remainingHours < 10) {
      hourEl.innerText = "0" + remainingHours;
    }
    if (remainingDays < 10) {
      dayEl.innerText = "0" + remainingDays;
    }

    setTimeout(updateCountdown, 1000)
}


