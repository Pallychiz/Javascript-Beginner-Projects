const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', (event)=>{
    // event.pageX/Y gives the X/Y positions of the mouse wrt the screen. To focus on the button HTMLTextAreaElement, we use subtraction of offsetTop&Left to remove the unwanted areas
    const x = event.pageX - btn.offsetLeft;
    const y = event.pageY - btn.offsetTop;

    // to change the var() property in the CSS, we used the style.setProperty() method
    btn.style.setProperty('--xPos', x + 'px');
    btn.style.setProperty('--yPos', y + 'px');
})