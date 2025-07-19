let num = [1,2,3,4,5];

// num.push(6,7,8,9);
console.log(num); //1,2,3,4,5,6,7,8,9 insert new items

// num.pop();
console.log(num); //1,2,3,4 remove the last item

// num.shift()
console.log(num); //2,3,4,5 remove the first item

// num.unshift(10)
console.log(num); // 10,1,2,3,4,5 insert new item to the front

let id = [101,102,103];
let names = ['ly', 'Nit','Bopha', 'Borey', 'Chamnan', 'Chan', 'Chantha', 'Chanthou']
let newArr = num.concat(id).concat(names); //add two or more arrays

console.log(newArr);

names.splice(0,2) //Removing items from a starting index to and ending index
console.log(names) 

