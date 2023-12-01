const input = document.getElementById('input');
const infoText = document.getElementById('info-text');
const meaningContainer = document.getElementById('meaning-container');
const title = document.getElementById('title');
const meaning = document.getElementById('meaning');
const audio = document.getElementById('audio');


input.addEventListener('keyup', (e)=>{
    //activates only when input is NOT empty, and ENTER key is pressed
    if(e.target.value && e.key === 'Enter'){
        fetchAPI(e.target.value);
    }
})

async function fetchAPI(word){
    try {
        meaningContainer.style.display = 'none';
        infoText.style.display = 'block';

        infoText.innerText = `Searching for the meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res)=>res.json());

        if(result.title){
            meaningContainer.style.display = 'block';
            infoText.style.display = 'none';
            title.innerText = result.title;
            meaning.innerText = result.message +' '+ result.resolution;
            audio.style.display = 'none';
        }else{
            infoText.style.display = 'none';
            meaningContainer.style.display = 'block';
            // using "block" display will not centralize the audio. Hence we use inline-flex
            audio.style.display = 'inline-flex';

            title.innerText = 'Word Title: '+result[0].word;
            meaning.innerText = 'Meaning: '+ result[0].meanings[0].definitions[0].definition;
            audio.src = result[0].phonetics[0].audio;
        }
    } catch (error) {
        meaningContainer.style.display = 'block';
        infoText.style.display = 'none';
        meaning.innerText = '';
        audio.style.display = 'none';
        title.innerText = 'An error has occured! Try again next time';
    }
   
}