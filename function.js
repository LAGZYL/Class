// function declaration, function expresion, arrow function

//function declaration
// function sum(a, b){
//  const add = a + b;
//  return add;
// }

// let output = sum(2, 4);
// console.log(output);

// // Write an algorithm that takes a list of integers and returns the sum of all the even numbers in the list.

// function sumnumber(list) {
//     let output = 0;
//     for (let element = 0; element < list.length; element++){
//         if ( list[element] % 2 == 0){
//             output += list[element];
//         }
//     }
//     return output;
// }


// let data1 = [6, 8, 5, 2, 9, 4];
// console.log(sumnumber(data1));

// //Write an algorithm that takes a string as input and returns the string reversed.
// function strReversed(str) {
// let output = '';

// for(let index = str.length - 1;  index >= 0; index--) {
//     output = output + str[index];
// }
//  return output;
// } 

function strReversed2(str){
    //  let arr = str.split('');
    //  console.log(arr); 
    //  let reversedArr = arr.reverse();
    //  console.log(reversedArr);
    //  let arrString = reversedArr.join("");
    //  console.log(arrString);
     
    return str.split("").reverse().join("");    
}
    


// console.log(strReversed("ayomikun"))

// console.log(strReversed2("ayomikun"))




// let country = "london";
//function expression
let product = function (num1, num2) {
    return num1 * num2;
}

// console.log(product(4,6))

 
//arrow function
let product1 = (num1, num2) => {
    return num1 * num2;
}

let product2 = (num1 = 2, num2= 19) =>  num1 * num2;

console.log(product2())

//IIFE - immediately invoked function expression
// ( function() {
//     let digit = 6;
//     let digit2 = 20;

//     console.log(digit + digit2);
// })();

// in-built function - Date
console.log(Date())
console.log(Date.now())
console.log(new Date().getDate())
console.log(new Date().getDay())
console.log(new Date().getFullYear())
console.log(new Date().getHours())
console.log(new Date().getMilliseconds())
console.log(new Date().getMinutes())
console.log(new Date().getMonth())
console.log(new Date().getSeconds())
console.log(new Date().getTime())
console.log(new Date().getTimezoneOffset())
console.log(new Date().getUTCDate())
console.log(new Date().getUTCDay())