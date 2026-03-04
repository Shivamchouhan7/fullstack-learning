// JavaScript Operators

//  Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// Assignment Operators
let x = 10;

x += 5;   // x = x + 5
console.log("x after += :", x);

x -= 3;   
console.log("x after -= :", x);

x *= 2;   
console.log("x after *= :", x);

// Comparison Operators
let num1 = 10;
let num2 = "10";

console.log("num1 == num2 :", num1 == num2);   // true (value check)
console.log("num1 === num2 :", num1 === num2); // false (value + type)
console.log("num1 != num2 :", num1 != num2); // similarly !== for strict comparison
console.log("num1 > 5 :", num1 > 5);
console.log("num1 < 5 :", num1 < 5);

// Logical Operators
let age = 20;

console.log("age > 18 && age < 30 :", age > 18 && age < 30);
console.log("age > 25 || age < 30 :", age > 25 || age < 30);
console.log("!(age > 18) :", !(age > 18));

//Increment / Decrement Operators 
let count = 5;

count++;
console.log("Increment:", count);

count--;
console.log("Decrement:", count);