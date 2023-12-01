const container = document.querySelector(".container");

const careers = ['Youtuber', 'Web Developer', 'Freelancer', 'Instructor', 'Content Manager', 'Archivist', 'Engineer', 'Father'];

let careerIndex = 0;

let charIndex = 0;

updateText();

function updateText(){
    charIndex++;
    container.innerHTML = `
    <h1>I am ${
      careers[careerIndex].slice(0, 1) === "A" ||
      careers[careerIndex].slice(0, 1) === "E" ||
      careers[careerIndex].slice(0, 1) === "I" ||
      careers[careerIndex].slice(0, 1) === "O" ||
      careers[careerIndex].slice(0, 1) === "U"
        ? "an"
        : "a"
    } ${careers[careerIndex].slice(0, charIndex)}</h1>
    `;

    if(charIndex === careers[careerIndex].length){
        careerIndex++
        charIndex = 0;
    }

    if(careerIndex === careers.length){
        careerIndex = 0;
    }

    setTimeout(updateText, 400)
}

