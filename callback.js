function greet(name, callback){
    console.log("Hello " + name);
    callback();  // calling callback function
}

function sayBye(){
    console.log("Goodbye!");
}

greet("Sourabh", sayBye);
