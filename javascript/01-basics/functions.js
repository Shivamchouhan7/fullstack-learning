// Functions in JS


//global/outer variable
let name="Shivam";

//function declaration
function showMessage() {
    let sname=' Chouhan'
    let msg='hello '+ name + sname;
  console.log( msg );
}

showMessage();//function calling

//accessing global and local variable 
console.log(name);
//console.log(sname); //give error

//function with parameters and return value 

let a=10,b=20;
function sum(a,b){
    return a+b;
}
console.log(sum(a,b));

//  Default Parameters
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(a)) //use default parameter 

// Function Expression
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(5,3));

// Arrow Function
const divide = (a, b) => {
    return a / b;
};
console.log(divide(10,2));

//Short Arrow Function (Implicit Return)
const square = x => x * x;
console.log(square(2));

// Function returning object 
function createUser(name,id){
    let data={
        Name:name,
        Id:id
    }
    return data;
}

console.log(createUser('shivam',101));

// Callback Function
function processUser(name, callback) {
    console.log("Processing...");
    callback(name);
}
function display(name) {
    console.log("User:", name);
}

processUser("Shivam", display);

// Rest Parameters
function sumAll(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log("Total:", sumAll(1, 2, 3, 4, 5));

// Function as Argument (Higher Order Function)
function operate(a,b,operation){
    return operation(a,b);
}

function add(a,b){
    return a+b;
}
console.log("operate :",operate(10,5,add));

// Function Returning Function (Closure Basic)
function multiplier(factor) {
    return function(num) {
        return num * factor;
    };
}

let double = multiplier(2);
console.log("Double:", double(5));

// Immediately Invoked Function (IIFE)
(function () {
    console.log("IIFE executed");
})();

// Recursive Function
function factorial(num){
    if(num==0 ||num==1){
        return 1;
    }
    return num*factorial(num-1);
}
console.log("Factorial of 5:", factorial(5));

// Arrow Function with Array
let nums = [1, 2, 3, 4];
let squares = nums.map(num => num * num);
console.log("Squares:", squares);
