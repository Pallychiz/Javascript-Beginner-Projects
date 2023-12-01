const timer = document.getElementById("timer");
const start = document.getElementById("start")
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

start.addEventListener("click", startTimer);

stop.addEventListener("click", stopTimer);

reset.addEventListener("click", resetTimer);

function startTimer(){
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime;
        timer.textContent = formatTime(elapsedTime);
    }, 100)

    start.disabled = true;
    stop.disabled = false;
}

function formatTime(elapsedTime){
    const milliseconds = Math.floor((elapsedTime % 1000)/10);
    
    const seconds = Math.floor((elapsedTime % (1000*60))/1000);
    
    const minutes = Math.floor((elapsedTime % (1000*60*60))/(1000*60));
    
    const hours = Math.floor(elapsedTime /(1000*60*60));
   
   
    return (
        (hours ? (hours > 9 ? hours : '0' + hours) : '00')
        +':'+
        (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00')
        +':'+
        (seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00')
        +':'+
        (milliseconds >9 ? milliseconds : '0'+ milliseconds));

}

function stopTimer(){
    clearInterval(timerInterval);

    start.disabled = false;
    stop.disabled = true;
}

function resetTimer(){
    clearInterval(timerInterval);
    elapsedTime = 0;
    timer.textContent = '00:00:00:00';

    start.disabled = false;
    stop.disabled = false;
}