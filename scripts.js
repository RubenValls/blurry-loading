const loading = document.querySelector("#loading");
const blurBackground = document.querySelector(".blur")
let counter = 0;
let initialOpacity = 1;
let initialBlur = 10;
let interval;

const changeLoading = () => {
    loading.innerHTML = `${counter}%`
    initialOpacity = initialOpacity - 0.01;
    initialBlur = initialBlur - 0.1;
    blurBackground.style.backdropFilter = `blur(${initialBlur}px)`;
    loading.style.opacity = initialOpacity; 
    counter += 1;
    if(counter > 100){
        window.clearInterval(interval);
    }
    if(counter === 100){
        blurBackground.style.background = "none";
    }
}

interval = setInterval(changeLoading, 25)