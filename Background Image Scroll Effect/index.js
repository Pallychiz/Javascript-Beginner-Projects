const bdgImage = document.getElementById('bgd-image');

window.addEventListener('scroll', updateBgdImage)

function updateBgdImage(){
    // they were divided by random numbers 850 & 12 respectively, to achieve the desired results. Background size is in perecentage, hence '%'
    bdgImage.style.opacity = 1 - window.scrollY / 850;
    bdgImage.style.backgroundSize = 150 - window.scrollY / 12 + '%'
}