const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

bar.addEventListener("click", ()=>{
    menu.classList.toggle("show-menu")
})

// toggle means, if there's a show-menu onclick, remove it; if not, add it