//Loops in JS 

// for loop 
console.log("Output of for loop \n")
for(let i=0;i<5;i++){
    console.log("Number = ",i);
}

//While loop
let i=0;
console.log("\nOutput of  while loop \n");
while(i<=5){
    console.log("Number = ",i);
    i++;
}

//do While loop

let j=0;
console.log("\nOutput of do while loop \n");
do{
    console.log("Number = ",j);
    j++;
}while(j<=5)

//Break Statement
console.log("\nBreak Example:");

for (let k = 1; k <= 10; k++) {
    if (k === 5) {
        break;
    }
    console.log(k);
}

//Continue Statement 
console.log("\nContinue Example:");

for (let x = 1; x <= 5; x++) {
    if (x === 3) {
        continue;
    }
    console.log(x);
}

//Some more loops 

//For of loop 

console.log("\nOutput 1 of for of loop \n");
let arr=[1,2,3,4,5];
for(let x of arr){
    console.log("Number = ",x);
}


console.log("\nOutput 2 of for of loop \n");

let fruits=["apple","mango","orange"];
for(let fruit of fruits){
    console.log("Fruit = ",fruit);
}

console.log("\nOutput 3 of for of loop \n");

let name="Shivam";
for(let char  of name){
    console.log("Char =" ,char);
}

//for in loop

let person={
    name : "Shivam",
    age : 20,
    branch : "IT"
}
console.log("\nOutput  of for in loop \n");
for(let key in person){
    console.log(`Key = ${key} , Value = ${person[key]}`);
}