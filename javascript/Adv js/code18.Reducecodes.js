let students = [
    {roll:101, name:'Vikas', age:23, gender:'male', city:'Indore', phy:56, che:65, maths:65},
    {roll:102, name:'Pooja', age:22, gender:'female', city:'Ujjain', phy:78, che:72, maths:85},
    {roll:103, name:'Ravi', age:24, gender:'male', city:'Mumbai', phy:67, che:59, maths:74},
    {roll:104, name:'Priya', age:21, gender:'female', city:'Pune', phy:88, che:91, maths:82},
    {roll:105, name:'Amit', age:23, gender:'male', city:'Bhopal', phy:45, che:62, maths:55},
    {roll:106, name:'Sneha', age:22, gender:'female', city:'Indore', phy:92, che:86, maths:95},
    {roll:107, name:'Rahul', age:25, gender:'male', city:'Ujjain', phy:71, che:68, maths:73},
    {roll:108, name:'Neha', age:21, gender:'female', city:'Mumbai', phy:81, che:79, maths:88},
    {roll:109, name:'Karan', age:24, gender:'male', city:'Pune', phy:63, che:75, maths:69},
    {roll:110, name:'Anjali', age:22, gender:'female', city:'Delhi', phy:95, che:89, maths:91}
];    

// find the total marks of all students using reduce method
let totalMarks = students.reduce((pv, cv) => pv + cv.phy + cv.che + cv.maths, 0);
console.log("Total Marks of all students: " + totalMarks);

// find avg marks of all students using reduce method
let avgMarks = totalMarks / students.length;
console.log("Average Marks of all students: " + avgMarks);

// find total marks of female students using reduce method
let totalFemaleMarks = students.reduce((pv, cv) => cv.gender=='female' ? pv+cv.phy + cv.che + cv.maths:pv,0)
console.log("Total female Marks =",totalFemaleMarks)

// find highest total marks 
let highestTotalMarks=students.reduce((pv,cv)=>(cv.phy + cv.che + cv.maths)>pv? (cv.phy + cv.che + cv.maths):pv,0)
console.log("highest Total Marks = ",highestTotalMarks)