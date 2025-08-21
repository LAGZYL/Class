let name = "tobi";
let country =' china  ';
let details = `my name is ${name}, i am from ${country}`; // template literal
let brand ='TOYOTA';

//length
console.log(brand.length);
//toUpperCase()
console.log(country.toUpperCase())
// toLowerCase()
console.log(brand.toLowerCase())
//concatenation - +, concat(), template literal
let concat1 = name + " " + brand;
// console.log(concat1);
let concat2 = country.concat(brand);
// console.log(concat2);
let concat3 = `${country}${brand}`;
// console.log(concat3);
//trim(), trimeEnd(), trimStart()
console.log(country.trim().length);
// extracting character - at(), charAt()
// l-0, o- 1, r-2, r_3, y-4
console.log(brand.at(4));
console.log(country.charAt(1));


//pad- padstart, padnd()
// console.log(country.padStart(100, '*'));
//strinf extraction - subString, slice
let phonenumber = "69686880";
let lastFour = phonenumber.substring(9, 11);
console.log(lastFour);
let secretNumber = lastFour.padStart(11, "*");
console.log(secretNumber);
console.log(phonenumber.slice(7, 11));

// repeat
console.log(phonenumber.repeat(4));

//replace , replaceAll
console.log(phonenumber.replace("6", 9));
console.log(phonenumber.replaceAll("8", "*"));

//search - startsWith, endsWith, includes, indexOf, lastIndexOf, search, 
console.log(phonenumber.startsWith("0"));

// if (phonenumber.startsWith("0") && phonenumber.length === 11){
//     console.log(phonenumber);
// } else if (phonenumber.length < 11) {
//    let nwph =  phonenumber.padStart(11, "0");
//     console.log(nwph);
// }

console.log(phonenumber.endsWith(6));
console.log(phonenumber.includes("8"));
console.log(phonenumber.indexOf("6"));
console.log(phonenumber.lastIndexOf("6"));
console.log(phonenumber.search("8"));


//split
let arr = phonenumber.split("");
console.log(arr);

let sent = "good morning from uk";
let sentArr = sent.split(" ")
console.log(sentArr);

/**
 * Given a string "JavaScript is fun", use split() to turn it into an array of words.

Concatenate two strings: "Hello" and "World" with a space between them.

Check if a string starts with "https" and ends with ".com"
 */

let sentence = "JavaScript is fun"
let sentenceArr = sentence.split(" ")
console.log(sentenceArr);

let concat5 = "hello"
let concate7 = "world"
let combined = concat5 + " " + concate7;
console.log(combined);

let url = "https://www.lagzyl.com";
console.log(url.startsWith("https"));
console.log(url.endsWith(".com"));

// How do you replace a word in a string? Replace "cat" with "dog" in "The cat sleeps."
let sentence1 = "the cat sleeps"
console.log(sentence1.replace("cat", "dog" ));
 










