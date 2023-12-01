const containerEl = document.querySelector(".container");
window.addEventListener("mousemove", (event) => {
    containerEl.innerHTML = 
    `<div class="mouse-track">
        ${event.clientX}
        <h4>Mouse X Position (px)</h4>
    </div>
    <div class="mouse-track">
        ${event.clientY}
        <h4>Mouse Y Position (px)</h4>
    </div>`
});