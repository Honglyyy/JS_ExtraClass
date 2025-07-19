// const person = {
//     id: 1,
//     name: 'Ly',
//     gender: 'Male',
//     phone_number: '012'
// };

// console.log(person.id);
// console.log(person.name);

// nested objects

const person2 = {
    id: 2,
    name: 'hongly',
    gender: 'Male',
    phone_number: '012',
    address : {
        city: 'PP',
        street: '011',
        country: 'Cambodia;'
    }
};


console.log(person2.address.city);
console.log(person2.address.street);
// Optional chaining
console.log(person2.address?.city);
// ? check if city exist or not if not it shows undefined 