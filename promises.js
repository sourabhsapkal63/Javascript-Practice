let p = new Promise((resolve) => {
    setTimeout(() => resolve("Loading Completed"), 3000);
});

p.then(res => console.log(res));


function checkNumber(num){
    return new Promise((resolve, reject) => {
        num % 2 === 0 ? resolve("Even Number") : reject("Odd Number");
    });
}

checkNumber(10)
.then(msg => console.log(msg))
.catch(err => console.log(err));
