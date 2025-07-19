const PromptSync = require("prompt-sync")();

let input = PromptSync

let a = parseInt(input(`Input a = `));
let b = parseInt(input(`Input b = `));


if(a>b) console.log('a is greater than b');
else if(a<b) console.log('a is less than b');
else console.log('a is equal to b');


