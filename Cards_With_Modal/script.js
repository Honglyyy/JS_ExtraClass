const users = [
    {
        id: '001',
        username: 'Jason',
        email: 'jason6@gmail.com',
        profileURL: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        id: '002',
        username: 'Mia',
        email: 'mia7@gmail.com',
        profileURL: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        id: '003',
        username: 'Ethan',
        email: 'ethan8@gmail.com',
        profileURL: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        id: '004',
        username: 'Chloe',
        email: 'chloe9@gmail.com',
        profileURL: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    {
        id: '005',
        username: 'Liam',
        email: 'liam10@gmail.com',
        profileURL: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    {
        id: '006',
        username: 'Zoe',
        email: 'zoe11@gmail.com',
        profileURL: 'https://randomuser.me/api/portraits/women/6.jpg'
    },
    {
        id: '007',
        username: 'Noah',
        email: 'noah12@gmail.com',
        profileURL: 'https://randomuser.me/api/portraits/men/7.jpg'
    },
    {
        id: '008',
        username: 'Lily',
        email: 'lily13@gmail.com',
        profileURL: 'https://randomuser.me/api/portraits/women/8.jpg'
    },
    {
        id: '009',
        username: 'Logan',
        email: 'logan14@gmail.com',
        profileURL: 'https://randomuser.me/api/portraits/men/9.jpg'
    },
    {
        id: '010',
        username: 'Grace',
        email: 'grace15@gmail.com',
        profileURL: 'https://randomuser.me/api/portraits/women/10.jpg'
    }
];


const cardContainer = document.querySelector('.cards-container')


users.forEach( (user) => {
    cardContainer.innerHTML += `
    <div class="cards" ondblclick="modalPopup()">
        <figure>
            <img src="${user.profileURL}"/>
        </figure>
        <h3>ID: ${user.id}</h3>
        <h4>Username: ${user.username}</h4>
        <h4>Email: ${user.email}</h4>
    </div>
`
})
const modalContainer = document.getElementById('modal-container')

modalContainer.style.display = 'none';

const modalPopup = () => {
    modalContainer.style.display = 'block';
    modalContainer.innerHTML = `<div class="modal-box">
        <div class="close-modal" role="button" title="Close Modal">
            x
        </div>
    </div>`;
}

const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})
const userCards = document.querySelectorAll('.cards')


userCards.forEach( card => {
    console.log(card)
} )


