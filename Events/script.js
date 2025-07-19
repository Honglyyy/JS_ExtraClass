//Array

const numberArray =[10,20,30,40,50,60,70,80,90];

// numberArray.forEach((items,index,array) => {
//     console.log(items,index,array);
// });

//index of
const index = numberArray.indexOf(50);
console.log("index of the number 50 is : "+index);


//push

numberArray.push(100);
console.log('Add 100 to the end of the array');
console.log(numberArray);

//filter

const filterArray = numberArray.filter(function(number){
    return number >=  50
})
console.log(filterArray)


//map

const numArr = [10,20,30,40,50,60,70]

const multiplication = numArr.map(function(number){
    return number * number
})
console.log(multiplication);
