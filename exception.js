//exception
// try..catch
let json = '{"age": 30 }';
// // try{
// //     let user = JSON.parse(json);
// //     console.log(user)
// //     if(!user.name){

// //         throw new Error("name not found")
// //     }

// //     console.log(user.name);
// // } catch (error)  {
// // console.log("there is an error", error);
// // }

// //try..catch..finally

// try{
//     let user = JSON.parse(json);
//     console.log(user)
//     if(!user.name){

//         throw new Error("name not found")
//     }

//     console.log(user.name);
// } catch (error)  {
// console.log("there is an error", error);
// } finally {
//     console.log("we are here")
// ;}


//type of error
/**
 * syntaxError - 
 * rangeError
 * referenceError - 
 */

let arr = [2, 4]

console.log(arr[-1])





function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("The argument must be between -500 and 500.");
  }
}

try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    console.log(error)
  }
}

