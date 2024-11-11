const {a,add} = require('./file-1'); 


//Name aliasing
const {a : a2,b : b2,add : add2} = require('./file-3');

console.log(a2,b2,add2(2,3,4));
