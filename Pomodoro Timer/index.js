const start = document.getElementById('start');
const stop = document.getElementById( 'stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

let interval;
timeRemaining = 1500; 
// that is 25 minutes (25*60=1500)

function updateTimer(){
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    let formattedTime = `${minutes.toString().padStart(2, '0')}` + ':' + `${seconds.toString().padStart(2, '0')}`;
    // the padStart helps to add a padding at the start of the string. 2 means double digit, while it adds 0 when its just a single digit.

    timer.innerHTML = formattedTime
}

start.addEventListener('click', startTimer);

stop.addEventListener('click', stopTimer);

reset.addEventListener('click', resetTimer);

function startTimer(){
    interval = setInterval(()=>{
        timeRemaining--;
        updateTimer();

        if (timeRemaining === 0){
            clearInterval(interval);
            alert('Time is up!');
            timeRemaining = 1500;
            timer.innerText = '25:00'
        }
    }, 1000)
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeRemaining = 1500;
    updateTimer();
}
