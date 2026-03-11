let Object={
    name:"car",
    price:2100,
    model:2015
}

console.log("Object =",Object);

//Accesing object property 

//dot notation
console.log("Name :",Object.name);

//bracket notation
console.log("Name :",Object["name"]);

//Accessing through Loop
for(let key in Object){
    console.log(`key : ${key} , Value : ${Object[key]}`);
}

//Modifying object value
Object.model=2016;
console.log("Model :",Object["model"]);

//Adding new property 
Object.location="Indore";
console.log("Object after adding new property :",Object);

//Deleting object property
delete Object.location;
console.log("Object after deletion :",Object);