const loading = document.querySelector("#loading");
let counter = 0;
let interval;

const changeLoading = () => {
    loading.innerHTML = `${counter}%`
    counter += 1;
    if(counter > 100){
        window.clearInterval(interval);
    }
}

interval = setInterval(changeLoading, 25)