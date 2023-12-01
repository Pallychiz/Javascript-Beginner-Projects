const bar = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".fa-xmark");

bar.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-sidebar");
})

closeSidebar.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar");
})