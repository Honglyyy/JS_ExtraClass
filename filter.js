const numArr = [1,2,3,46,7,6,45,78,18,19];

const filteredNum = numArr.filter( (number) => {
    const isEven = number % 2 === 0;
    return isEven
})
console.log(filteredNum);

const isAdult = numArr.filter((number) => {
    return number >= 18
})
console.log(isAdult);


const namesArr = ['Vichear','Ly','Nit','Liza','Cher','Bong','Kim','Long','Lik','Yin'];

const filteredNames = namesArr.filter((name) =>{
    return name.toLocaleLowerCase().includes('g')
})

console.table(filteredNames);

// const mapping = numArr.map((num) =>{
//     return num * 2;
// })
// console.log(mapping);
