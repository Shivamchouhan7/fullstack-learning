// Arrays in JS

let number=[1,2,3,4,5,6,7,8,9];

console.log("Numbers",number);

//Accessing elements 

console.log("Num =",number[0]);
console.log("Num =",number[1]);

//length of array 
console.log("Length of array =",number.length);

//modifying elements 
number[0]=10;
console.log("Updated Array ",number);

//Accessing elements through loop

//for of loop 
for(let num of number){
    console.log("Num =",num);
}