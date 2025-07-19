function UserCard(user) {
    return `
        <div class="card">
            <h2>ID: ${user.id}</h2>
            <h2>Name: ${user.name}</h2>
            <h2>Username: ${user.username}</h2>
            <h2>Email: ${user.email}</h2>
            <hr>
            <h2>Address</h2>
            <ul>
                <li>Street: ${user.address.street}</li>
                <li>Suite: ${user.address.suite}</li>
                <li>City: ${user.address.city}</li>
                <li>Zip Code: ${user.address.zipcode}</li>
                <li>Geo:
                    <ul>
                        <li>Lat: ${user.address.geo.lat}</li>
                        <li>Lng: ${user.address.geo.lng}</li>
                    </ul>
                </li>
            </ul>
        </div>
    `;
}

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    users.forEach(user => {
        document.body.innerHTML += UserCard(user);
    });
}

fetchData();