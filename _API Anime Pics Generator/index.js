const btn = document.getElementById('btn');
const animeContainer = document.querySelector('.anime-container');
const animeImg = document.querySelector('.anime-img');
const animeName = document.querySelector('.anime-name');
const apiURL = 'https://api.catboys.com/img';

btn.addEventListener('click', getAnime);

async function getAnime(){
    try {
        btn.disabled = true;
        animeContainer.style.display = 'block';
        animeImg.src = 'loading.gif';
        btn.innerText = 'Loading...';
        animeName.innerText = 'Updating...';
    
        const response = await fetch(apiURL);
        const data = await response.json();

        btn.disabled = false;
        btn.innerText = 'Get Anime';
        animeImg.src = await data.url;
        animeName.innerText = data.artist;
    } catch (error) {
        console.log(error);
        btn.disabled = false;
        btn.innerText = 'Get Anime';
        animeImg.src = 'error.gif';
        animeName.innerText = 'An error occured! Try again later.';
    }
}