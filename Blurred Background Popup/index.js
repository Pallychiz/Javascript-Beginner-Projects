const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const popupContainer = document.querySelector('.popup-container');
const popupBtn = document.querySelector('.popup-btn');
const closeIcon = document.querySelector('.close-icon');

btn.addEventListener('click', ()=>{
    container.classList.add('active');
    popupContainer.classList.remove('active');
})

popupBtn.addEventListener('click', ()=>{
    popupContainer.classList.add('active');
    container.classList.remove('active');
})

closeIcon.addEventListener('click', ()=>{
    popupContainer.classList.add('active');
    container.classList.remove('active');
})




