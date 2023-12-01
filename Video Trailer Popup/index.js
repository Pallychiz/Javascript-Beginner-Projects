const btn = document.querySelector('.btn');
const closeButton = document.querySelector('.close-icon');
const trailerContainer = document.querySelector('.trailer-container');
const video = document.querySelector('video');

btn.addEventListener('click', ()=>{
    trailerContainer.classList.remove('active');
})

closeButton.addEventListener('click', ()=>{
    trailerContainer.classList.add('active');
    video.pause();
    video.currentTime = 0;
})