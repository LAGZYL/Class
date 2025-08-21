// setTimeout(() => {
//    console.log('Hello');
// }, 3000);

// //promise - pending, fulfill - resolve(), reject - reject()
// let newPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve('hello');
//     }, 3000)
// })

// newPromise.then((value) =>
//     console.log(value)
// )

// const myPromise = new Promise((resolve, reject)=> {
// let success = false;
// if(success){
//     resolve("Operation successful");
// } else {
//     reject("operaation failed");
// }
// });

// myPromise.then(result => console.log(result)).catch(error => console.log(error));

//promise chaining
// new Promise((resolve) => resolve(2)).then(num => num * 2).then(num => num * 3).then(result => console.log(result))

// const p1 = Promise.resolve(" is done");
// const p2 = new Promise(resolve => setTimeout(() => resolve("Task 2 done"), 1000));
// const p3 = Promise.resolve("Task 3 done");
 const p4= Promise.reject("Task error");

// promise.all
// p1.then()
// p2.then()
// p3.then()

// Promise.all([p1, p2, p4]).then(results => console.log(results)).catch(error => console.log(error)); 


//Promise.allSettled
// Promise.allSettled([p1, p2, p3, p4]).then(results => console.log(results)).catch(error => console.log(error));

//promised.race
const p5= new Promise(resolve => setTimeout(() => resolve("Fast"), 500));
const p6= new Promise(resolve => setTimeout(() => resolve("Slow"), 1500));

// Promise.race([p4, p6]).then(result => console.log(result)).catch(error => console.log(error))

// promise.any

const p1 = Promise.reject("Error 1");
const p2 = new Promise(resolve => setTimeout(() => resolve("Success 1"), 1000));
const p3 = new Promise(resolve => setTimeout(() => resolve("Success 2"), 2000));

Promise.any([p1, p2, p3])
  .then(result => console.log(result))
  .catch(error => console.error(error));
