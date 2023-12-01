const textarea = document.getElementById('textarea');
const totalCount = document.getElementById('total-count');
const remainingCount = document.getElementById('remaining-count');

updateCounter();

textarea.addEventListener('keyup', ()=>{
    updateCounter();
})

function updateCounter(){
    totalCount.innerText = textarea.value.length;
    remainingCount.innerText = textarea.getAttribute('maxlength') - textarea.value.length 
}