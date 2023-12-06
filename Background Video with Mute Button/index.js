const btnPausePlay = document.querySelector(".btn-pause-play");
const btnMuteUnmute = document.querySelector(".btn-xmark-high");
const video = document.querySelector(".bgd-video");
const fa = document.querySelector(".btn-pause-play .fa-solid");
const fa2 = document.querySelector(".btn-xmark-high .fa-solid");
const preloader = document.querySelector(".preloader");

btnPausePlay.addEventListener("click", ()=>{
    if(btnPausePlay.classList.contains("pause")){
        btnPausePlay.classList.remove("pause");
        video.play();
        fa.classList.add("fa-pause");
        fa.classList.remove("fa-play");
    }else{
        btnPausePlay.classList.add("pause");
        video.pause();
        fa.classList.remove("fa-pause");
        fa.classList.add("fa-play");
    }
});

btnMuteUnmute.addEventListener("click", ()=>{
    if(btnMuteUnmute.classList.contains("xmark")){
        btnMuteUnmute.classList.remove("xmark");
        video.muted = false;
        fa2.classList.add("fa-volume-xmark");
        fa2.classList.remove("fa-volume-high");
    }else{
        btnMuteUnmute.classList.add("xmark");
        video.muted = true;
        fa2.classList.remove("fa-volume-xmark");
        fa2.classList.add("fa-volume-high");
    }
});

window.addEventListener("load", ()=>{
    preloader.style.zIndex = (-2);
})