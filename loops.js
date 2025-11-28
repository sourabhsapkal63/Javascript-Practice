//Example of loops in JavaScript

// ?

//while loop

// let i = 10;
// while(i >= 1){
//     console.log(i);
//     i--;
// }

//do while loop
// let i = 2;
// do{
//     console.log(i); // Runs once even if condition is false
//     i++;
// }while(i <= 10);


//for of loop
// let marks = [80, 75, 90, 65];
// let sum = 0;

// for(let m of marks){
//     sum += m;
// }
// console.log("Total:", sum);

//for in loop

// let person = {name:"Raj", age:25, city:"Pune"};
// let count = 0;

// for(let key in person){
//     count++;
// }
// console.log("Total keys:", count); // 3

//for each loop

let nums = [2,3,4,5];
let squares = [];

nums.forEach(n => squares.push(n*n));

console.log(squares); // [4,9,16,25]
