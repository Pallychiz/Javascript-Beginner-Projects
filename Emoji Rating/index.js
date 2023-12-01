const stars = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".fa-regular");
const colorsArray = ['darkred', 'red', 'yellow', 'lightgreen', 'darkgreen'];

updateRating(0);

stars.forEach((star, index)=>{
    star.addEventListener('click', ()=>{
        updateRating(index)
    })
})

function updateRating(index){
    stars.forEach((star, idx)=>{
        if(idx < index + 1){
            star.classList.add('active')
        }else{
            star.classList.remove('active')
        }
    })

    emojis.forEach((emoji)=>{
        emoji.style.transform = `translateX(-${50 * index + 1}px)`
        emoji.style.color = colorsArray[index];
    })
}