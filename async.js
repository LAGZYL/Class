// //asyncronous programming
// console.log("happy");
// setTimeout(() => {console.log("morning")}, 10000)
// console.log("ages");
// setTimeout(() => {console.log("This is United kINGDOM")}, 5000)
// console.log("sad");
// setTimeout(() => {
//   console.log("this is the first message");
// }, 5000);
// setTimeout(() => {
//   console.log("this is the second message");
// }, 3000);
// setTimeout(() => {
//   console.log("this is the third message");
// }, 1000);
// queue - FIFO - first in first out
// stack - LIFO - last in first out

// async function getData() {
//  try {
//    const response = await fetch("https://api.agify.io/?name=meelad");
//    console.log("why now", response)
//    return await response.json();
//  }  catch(error){
//     console.log("there is an error", error)
//  } 
// } 

// console.log(getData());

//async - await
// async function showMyGit(){
//   let response = await fetch(`https://api.github.com/users/tobiadedoyin`);
//   let output = await response.json();
//   return output;
// }

// let myGitInfo = await showMyGit();

// console.log(myGitInfo);

async function showMyLinkedin() {
let response = await fetch("https://api.adviceslip.com/advice")
let output = await response.json();
return output;
}
let myLinkedin = await showMyLinkedin();
console.log(myLinkedin);


// async function showMyGit(){
//   let response = fetch("")
//   let output = await response.json();
//   return output;
  
async function showMyGit(){
  let response = await fetch("");
  let output = await response.json();
  return response;
}
let showMyGit = await showMyGit();


