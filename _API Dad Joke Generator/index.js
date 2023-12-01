const API_KEY = 'zHU/Q3j7T4Dn9VWlWT5wnQ==jk0aDUmKh3Wwk6CM'
const API_URL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'
const options = {
    method: 'GET',
    headers: { 'X-Api-Key': API_KEY}
}

const btn = document.getElementById('btn');
const joke = document.getElementById('joke');

btn.addEventListener('click', getJoke);

async function getJoke(){
    try {
        joke.innerText = 'Updating...';
    btn.disabled = true;
    btn.textContent = 'Loading...';
    
    const response = await fetch(API_URL, options);
    const data = await response.json();
    joke.innerText = data[0].joke;
    
    btn.disabled = false;
    btn.textContent = 'Tell me a Joke';
    } catch (error) {
        joke.innerText = 'An error occured! Try again later';
        btn.disabled = false;
        btn.textContent = 'Tell me a Joke';
    } 
}