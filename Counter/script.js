const mainEL = document.querySelector('main')
const spanEl = document.querySelector('span');
let counter = 0;

const initial = () =>{
    mainEL.innerHTML = 0;
    spanEl.innerText = 'smaller';
}

const increase = () =>{
    counter++;
    mainEL.innerHTML = counter;
    if(counter > 15) spanEl.innerText = 'bigger';
    else if (counter === 15) spanEl.innerText = 'equal';

}

const decrease = () =>{
    counter--;
    mainEL.innerHTML = counter;
    if(counter < 15) spanEl.innerText = 'smaller';
        
}
document.addEventListener('DOMContentLoaded', ()=>{
    initial()
})

