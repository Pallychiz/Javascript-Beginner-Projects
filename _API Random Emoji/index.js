const API_KEY = '271bc60b34b075acabb81ec695c83c20170c7efb';
const apiURL = 'https://emoji-api.com/emojis?access_key='+API_KEY;

const btn = document.getElementById('btn');
const emojiName = document.getElementById('emoji-name');

const emoji = [];

btn.addEventListener('click', randomNumber);

async function getEmoji(){
    let response = await fetch(apiURL);
    data = await response.json();
    
    for(let i  = 0; i < 1500; i++){
        emoji.push({
            emojiName: data[i].unicodeName,
            emojiCharacter: data[i].character
        })
    }
}

function randomNumber(){
    const randomNum = Math.floor(Math.random() * emoji.length);
    btn.innerText = emoji[randomNum].emojiCharacter;
    emojiName.innerText = emoji[randomNum].emojiName;
}

getEmoji();