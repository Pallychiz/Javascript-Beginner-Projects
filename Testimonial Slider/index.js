const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernametEl = document.querySelector(".username");

const testimonials = [
    {
        name: "Allah G",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
        text: "Apple is worth much more than I paid. I STRONGLY recommend Apple to EVERYONE interested in running a successful online business! I would gladly pay over 600 dollars for Apple."
    },
    {
        name: "Penelope J",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
        text: "I am completely blown away. Definitely worth the investment. Apple is the real deal! I can't say enough about Apple."
    },
    {
        name: "Anette E",
        photoUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
        text: "Apple was worth a fortune to my company. I use Apple often. I STRONGLY recommend Apple to EVERYONE interested in running a successful online business! I have gotten at least 50 times the value from Apple."
    },
    {
        name: "Annalisa S",
        photoUrl: "https://images.unsplash.com/photo-1521132293557-5b908a59d1e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        text: "I am really satisfied with my Apple. We've used Apple for the last five years. Apple is worth much more than I paid. Best. Product. Ever!"
    }
]

let num = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[num];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernametEl.innerText = name;
    num++
    setTimeout(()=>{
        updateTestimonial()
    }, 3000);
}

