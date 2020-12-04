[1, 2].reduce((acc, el, i, arr) => {}, []);
//! return acc element
//? callback return accumulator

//! map return new array with same length
//? callback return element

//! filter return new array with <= length
//? callback return boolean

//! forEach return nothing
//? callback return nothing

//! find return element
//? callback return boolean and stop when receive true

//! some return boolean
//? callback return boolean and stop when receive true

//! every return boolean
//? callback return boolean and stop when receive false

const two = { name : 'Two' };
const arr = [{ name : 'One' }, two, { name : 'Three' }];

console.log(arr.includes(two));