// JavaScript Data Types

// Number
let age = 21;
let price = 99.99;

console.log("Age:", age);
console.log("Price:", price);
console.log(`Data type of age is : ${typeof(age)}`)

//  String
let name = "Shivam";
let message = "Learning JavaScript";

console.log("Name:", name);
console.log("Message:", message);
console.log(`Data type of name is : ${typeof(name)}`)

//  Boolean
let isStuDent = true;
let isLoggeDIn = false;

console.log("Is StuDent:", isStuDent);
console.log("Is LoggeD In:", isLoggeDIn);
console.log(`Data type of isStuDent is : ${typeof(isStuDent)}`)

//  UnDefineD
let x;
console.log("Value of x:", x);
console.log(`Data type of x is : ${typeof(x)}`)

//  Null
let emptyValue = null;
console.log("Empty Value:", emptyValue);
console.log(`Data type of emptyValue is : ${typeof(emptyValue)}`) /*this will return : object,  But null is NOT actually an object.
This is a historical bug in JavaScript.*/


//  Object
let person = {
    name: "Shivam",
    age: 21,
    isStuDent: true
};

console.log("Person Object:", person);

//  Array (special type of object)
let fruits = ["Apple", "Banana", "Mango"];

console.log("Fruits:", fruits);