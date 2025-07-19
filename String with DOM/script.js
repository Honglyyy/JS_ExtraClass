import { nameArr } from "./db.js";

// const inputEl = document.querySelector('#input');
const ulEl = document.querySelector('ul');


// // Initial render
// nameArr.forEach(name => {
//     ulEl.innerHTML += `<li>${name}</li>`;
// });

// inputEl.addEventListener('input', () => {
//     ulEl.style.display = 'block';
//     const inputValue = inputEl.value.toLowerCase().trim();
//     ulEl.innerHTML = ''; // Clear previous list

//     const filteredNames = nameArr.filter(name => 
//         name.toLowerCase().includes(inputValue)
//     );

//     if (filteredNames.length > 0) {
//         filteredNames.forEach(name => {
//             ulEl.innerHTML += `<li>${name}</li>`;
//         });
//     } else {
//         ulEl.innerHTML += `<li>${inputEl.value.trim()}, not found</li>`;
//     }
// });

const names = nameArr.map((name) => {
    return `<li>${name}</li>`;
});

names.forEach((name) => {
    ulEl.innerHTML += name; // ✅ Add each <li> string individually
});
