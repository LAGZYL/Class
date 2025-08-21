// let cars = ["volvo", "toyota", "nissan", "kia", "ford"];
// // // let arr = new Array(1 ,4, 5, 6);
// // console.log(cars[0]);
// // cars[4] = "lexus";
// // console.log(cars);
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(number[4]);
// // console.log(number.length);
// let number1 = ["car24", 450, false, {}, [2,4]];
// // console.log(Array.isArray(number1))
// // number1[5] = "Mercedes"
// // console.log(number1);

// //array methods
// //at()
// let car = cars[3];
// let car2 = cars.at(34)
// console.log(car);
// console.log(car2);

// //array to string
// let stringarr = cars.join(" * ");
// console.log(stringarr);

// //push, unshift
// cars.push("suzuki")
// cars.unshift("honda")
// console.log(cars);

 // //pop, shift
// cars.pop()
// cars.pop()
// cars.shift()
// console.log(cars);

// //concat
// let combined = cars.concat(number, number1);
// console.log(combined);

// // Create an array of fruits and print the last item without using.

// // Join all elements of the array into a single string using

// let fruit = ["apple", "watermelon", "banana", "pawpaw", "peer","cashew"]
// console.log(fruit[5]);
// let strigarr = fruit.join(" p ");
// console.log(strigarr);

// let nested = [1,3, [47,[76], 98], [89]];
// console.log(nested);
// let flatten = nested.flat(2)
// console.log(flatten);

// //slice, splice
// console.log(cars.slice(1,3));
// let bewr
// console.log();

// //array search
// // indexOf, lastIndexOf, includes, find, findIndex, findLast, findLastIndex
// const country = ["niger", "chad", "mali", "spain", "usa", "togo", "mali"];
// console.log(country.indexOf("mali"));
// console.log(country.lastIndexOf("mali"));
// console.log(country.includes("spain"));
// console.log(country.findLastIndex(element => element.includes("z")));

//array sort
//sort, reverse,
let age = [12, 5, 6, 2, 45]
// console.log(age.sort((a, b) => b - a));
// console.log(country.reverse());

//array iteration
//forEach, map, filter, reduce
// age.forEach(element => console.log(element + 10));
// age.map((value, index, array) => console.log(value));
// age.filter(element => console.log(element > 10));
const sum = age.reduce((current, accumulation) => current + accumulation, 100);
console.log(sum);


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
let output = 100;

for (let index = 0; index < age.length; index++) {
   output += age[index]; 
}

console.log(output);







