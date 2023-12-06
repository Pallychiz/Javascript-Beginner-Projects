const searchBar = document.querySelector(".search-bar-container");
const searchBtn = document.querySelector(".magnifier");
const microphone = document.querySelector(".microphone");

searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('active')
})
