let numbers=[1,2,3,4,5,6];

//push()
numbers.push(7);
console.log("Numbers =",numbers);
//pop()
numbers.pop();
console.log("Numbers =",numbers);

// unshift() → add element at beginning
numbers.unshift(0);
console.log("After unshift:", numbers);

// shift() → remove first element
numbers.shift();
console.log("After shift:", numbers);

// includes() → check if element exists
console.log("Includes 3:", numbers.includes(3));

// indexOf() → find index
console.log("Index of 3:", numbers.indexOf(3));

let a=[1,2,3];
let b=[4,5,6];

let c= a.concat(b);
console.log("final array after concatination",c);

// .map()
let squares= numbers.map(num=>num*num);
console.log("Squares of numbers:",squares);

// .filter()
let evenNumbers= numbers.filter(num=>num%2===0);
console.log("Even numbers:",evenNumbers);

// .forEach()
console.log("Numbers:");
let sum=0;
numbers.forEach(num=>sum+=num);
console.log("Sum of numbers:",sum);
