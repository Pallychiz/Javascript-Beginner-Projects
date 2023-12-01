const btn = document.getElementById('btn');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

btn.addEventListener('click', getQuote);

async function getQuote(){

    try {
        btn.innerText = 'Loading...';
        btn.disabled = true;
        quote.innerText = 'Updating...';
        author.innerText = '~ Updating...';
    
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();

        quote.innerText = data.content;
        author.innerText = "~ " + data.author;
        btn.disabled = false;
        btn.innerText = 'Get Quote';
    } catch (error) {
        console.log(error);
        quote.innerText = 'An error has occured! Try again later.';
        author.innerText = '';
        btn.disabled = false;
    }
    
}

getQuote();