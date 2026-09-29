stu1={roll:101, name:'Vikas', age:23, gender:'male', city:'Indore', phy:56, che:65, maths:65}
stu2={roll:102, name:'Pooja', age:22, gender:'female', city:'Ujjain', phy:78, che:72, maths:85}
console.log("Student 1: ",stu1)

// stu2={...stu1}
stu3={...stu1,roll:102,name:'pawan',age:22}
console.log("Student 2: ",stu3)

stu4={...stu1,...stu2}// here the values of stu2 will overwrite the values of stu1 if they have same keys
// stu4={...stu2,...stu1}
console.log("Student 4: ",stu4)