const input = require('prompt-sync')();

let x = input("Input x = ");

//for loop
console.log('for loop');

for(let i = 0; i<=x ; i++){
    console.log(i);
}

console.log('-----------------------');


// while loop
console.log('while loop');

let i = 0
while(i < x){
    console.log(i);
    i++
}

console.log('-----------------------');

// do while loop
console.log('do while loop');
let j = 0;
do{
    console.log(j);
    j++
}while(j < x)