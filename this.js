// this keyword
// "use strict";
function showThi() {
    console.log(this)
}

showThi()
// alone , it call the global object
console.log(this)


//in an object method
const person = {
    name: "Alice",
    greet: function() {
        console.log(`hello, my name is ${this.name}`)
    }
}

person.greet();

//in a function
function showThis() {
    console.log(this)
}

showThis()


