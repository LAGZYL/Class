//set
const newSet = new Set();
newSet.add(2);
newSet.add(2);
newSet.add(90);
newSet.add(599);
console.log(newSet.size);
console.log(newSet.values())
console.log(newSet.keys())
console.log(newSet.has(599))
// console.log(newSet.delete(599))
// newSet.clear()
// console.log(newSet)

for(let entries of newSet){
    console.log(entries);
}



// rest operator ...
//return a distinct elements in an array
// let arr1 = [6,7,8,6,5,4,5,6,7,3,4,2,1,3,5,6,7,6,5,8];
// let distinct = new Set(arr1);
// console.log(distinct);

// let newArr =[];
// for (let i = 0; i < arr1.length; i++) {
//     if (!newArr.includes(arr1[i])){
//         newArr.push(arr1[i])
//     }
// }
//  console.log('from for loop', newArr)
