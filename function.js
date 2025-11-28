//example of  function in JavaScript

function greet(name){
    return "Hello " + name + "!";
}

console.log(greet("Sourabh")); // Output: Hello Sourabh!


function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"


function countVowels(str){
    let vowels = "aeiouAEIOU";
    let count = 0;

    for(let char of str){
        if(vowels.includes(char)) count++;
    }
    return count;
}

console.log(countVowels("javascript")); // Output: 3
