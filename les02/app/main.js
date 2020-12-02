const arr = [2,3,4];

arr[99] = 99;
arr[-3] = -3;

arr['Hello'] = 'Hi';
arr['         '] = 33;
arr.push({name:'Nick'});

arr.forEach(console.log);

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.length = 1;

console.log(arr);


// console.log('-------------------------------------');   
// for(let el in arr){
//     console.log(el, arr[el]);
// }

const arr2 = [...arr];
const arr3 = arr.slice();
const arr4 = arr.concat([]);
const arrStr5 = JSON.stringify(arr);
const arr5 = JSON.parse(arrStr5);

console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);