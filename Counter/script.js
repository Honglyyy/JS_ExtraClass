const mainEL = document.querySelector('main')
const spanEl = document.querySelector('span');
let counter = 0;

const initial = () => {
    counter = 0;
    mainEL.innerHTML = counter;
    spanEl.innerText = 'smaller than';
    mainEL.style.color = "red";
};

const increase = () => {
    counter++;
    mainEL.innerHTML = counter;

    if (counter > 15) {
        spanEl.innerText = 'bigger than';
    } else if (counter === 15) {
        spanEl.innerText = 'equal to';
    } else {
        spanEl.innerText = 'smaller than';
    }

    mainEL.style.color = "white"; // because counter > 0 after increase
};

const decrease = () => {
    counter--;
    mainEL.innerHTML = counter;

    if (counter < 15) spanEl.innerText = 'smaller than';

    if (counter > 0) {
        mainEL.style.color = "white";
    } else {
        mainEL.style.color = "red";
    }
};
document.addEventListener('DOMContentLoaded', ()=>{
    initial()
})

