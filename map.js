// key-value pairs
//() -> parenthesis
// [] -> square bracket
//{} -> curly braces

const newMap = new Map();

//insertion
newMap.set("name", "Wale");
newMap.set("school","Akungba");
newMap.set("place","ondo")
newMap.set("DateofBirth", 1990);
newMap.set("agerange",["2","3","4","5","6","7"])
newMap.set(1, 'one')

//getting a value
console.log(newMap.get(1))
// console.log(newMap.get("place"))
// console.log(newMap.get("DateofBirth"))


//has  value
console.log(newMap.has("name"))
console.log(newMap.has('age'))

//delete
newMap.delete("place") 


// newMap.clear()

console.log(newMap.size)
console.log(newMap.keys())
console.log(newMap.values())

for
(let entries of newMap){
    console.log(entries)
}




console.log(newMap);