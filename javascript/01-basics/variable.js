
// 1️. var 
var name = "Shivam";
console.log("Using var:", name);

// var can be redeclared
var name = "Chouhan";
console.log("Redeclared var:", name);


// 2️. let 
let age = 20;
console.log("Using let age is :", age);

// let cannot be redeclared in same scope
age = 21;  //  Allowed (reassignment)
console.log("Updated age:", age);


// 3. const (Constant value - cannot change)
const country = "India";
console.log("Using const:", country);

//  This will give error
// country = "USA";


// 4️. Variable Naming Rules

let firstName = "Shivam";     // camelCase 
let _rollNumber = 101;        // Can start with _
let $fees = 50000;            // Can start with $
let student1 = true;          // Can include numbers (not at start)


// 5️. Invalid Variable Names 

// let 1name = "Error";      Cannot start with number
// let var = 10;             Reserved keyword


// 6️. typeof operator

console.log(typeof firstName);   // string
console.log(typeof age);         // number
console.log(typeof student1);    // boolean


// 7️. Block Scope Example

{
    let blockVar = "exist only inside block";
    console.log(blockVar);
}

// console.log(blockVar);  Error (block scoped)


// 8️. Difference Between var, let, const (Quick Summary)

/*
var   → Function scoped, can redeclare
let   → Block scoped, cannot redeclare
const → Block scoped, cannot reassign
*/