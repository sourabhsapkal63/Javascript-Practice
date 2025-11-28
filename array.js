//Examples of array in JavaScript

let nums = [1,2,3,4,5,6,7,8];
let evens = nums.filter(n => n % 2 === 0);

console.log(evens); // [2,4,6,8]


let a = [1,2,3];
let b = [4,5,6];

let merged = [...a, ...b];
console.log(merged); // [1,2,3,4,5,6]
