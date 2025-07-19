function renderUsers(user) {
    const completedStyle = user.completed ? "color: green;" : "color: red;";

    return `
        <div class="cards">
            <h1>User ID: ${user.userId}</h1>
            <h3>ID: ${user.id}</h3>
            <h2>Title: ${user.title}</h2>
            <span style="display: inline">Completed: <h3 style="${completedStyle} display:inline"> ${user.completed}</h3></span>
        </div>
    `;
}

const containerCl = document.querySelector('.container');

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const users = await response.json();

    users.forEach(user => {
        containerCl.innerHTML += renderUsers(user);
    });
}

fetchData();