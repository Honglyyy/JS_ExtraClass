// const nameStr = "Hongly";

// console.log(nameStr.includes('ly'));

// console.log(nameStr.toLowerCase())
// console.log(nameStr.includes('HON'.toLocaleLowerCase()))


const nameArr = ['Hongly','Nit','Long','Hengly','Kim','Daniel','Loren','Liza'];

const search = 'l';
// console.log(nameArr[0].toLowerCase().includes(search.toLowerCase()));


const filterName = nameArr.filter(function(name){
    return name.toLowerCase().includes(search.toLowerCase())
})

console.log(filterName);
