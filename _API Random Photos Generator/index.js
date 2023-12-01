const imageContainers = document.querySelector('.image-container');
const btn = document.querySelector('.btn');

addNewImages()

btn.addEventListener('click', ()=>{
    addNewImages();
})

function addNewImages(){
    for(i = 1; i <= 10; i++){
        const randomNumber = Math.ceil(Math.random() * 2000);
        const imageContainer = document.createElement('img');
        imageContainer.src = `https://picsum.photos/300?random=${randomNumber}`
        imageContainers.appendChild(imageContainer);
    }
}