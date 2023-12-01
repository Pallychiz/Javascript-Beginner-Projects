const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");

let num = 0;

updateNum();

function updateNum(){
  counterEl.innerText = num + "%";
  barEl.style.width = num + "%";
  num++
  if(num<=100){
    setTimeout(updateNum, 50);
  }
}