// console.log("Step 1");
// setTimeout(() => {
    
//     console.log("Step 2");
// }, 1000);
// console.log("Step 3");


const preEl = document.querySelector('#container')


async function fetchData() {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const user = await reponse.json();
    preEl.innerHTML = JSON.stringify(user, null,2)
}

fetchData()
