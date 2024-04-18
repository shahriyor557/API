let btn = document.querySelector('.btn');
let adviceP = document.querySelector('.text');
let adviceId = document.querySelector('#advice');
let isLoading = false;

btn.addEventListener('click', () => {
    if (!isLoading) {
        isLoading = true;
        adviceP.innerText = 'Loading...';
        getAdvice();
        btn.removeEventListener('click', clickHandler); 
    }
});

function getAdvice() {
    let req = new XMLHttpRequest();
    req.open('GET', "https://api.adviceslip.com/advice");
    req.send();
    req.onload = function () {
        isLoading = false;
        const data = JSON.parse(req.response);
        console.log(data);
        adviceP.innerText = data.slip.advice;
        adviceId.innerText = "ADVICE #" + data.slip.id;
        btn.style.backgroundColor = ''; 
        btn.addEventListener('click', clickHandler); 

    };
}
