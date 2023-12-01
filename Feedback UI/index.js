const ratings  = document.querySelectorAll('.rating');
const btn = document.getElementById('btn');
const container = document.getElementById('container');

let selectedRating = '';

ratings.forEach((rating) => {
    rating.addEventListener('click', (event) => {
        removeActive()
        rating.classList.add('active');
        selectedRating = rating.innerText;
        console.log(selectedRating);
        
    });
})

function removeActive(){
    ratings.forEach((rating)=>{
        rating.classList.remove('active');
    })
}

btn.addEventListener('click', ()=>{
    if(selectedRating !== ''){
        container.innerHTML = `
        <strong>Thank You!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>Your Feedback will be used to improve our customer support</p>
        `
    }
})

