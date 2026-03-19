// JavaScript Object Methods

let student = {
    name: "Shivam",
    age: 21,
    branch: "IT"
};

// Object.keys()
let keys = Object.keys(student);
console.log("Keys:", keys);

// Object.values()
let values = Object.values(student);
console.log("Values:", values);

// Object.entries()
let entries = Object.entries(student);
console.log("Entries:", entries);

// hasOwnProperty()
console.log("Has age:", student.hasOwnProperty("age"));
console.log("Has marks:", student.hasOwnProperty("marks"));