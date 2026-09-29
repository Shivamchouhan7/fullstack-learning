// x=[11,22,33]
// a=x[0]
// b=x[1]
// c=x[2]
//  console.log(a," ",b," ",c)

//  destructuring assignment
// var [a,b,c]=x // here we are destructuring the array x and assigning its values to a,b,c
// console.log(a," ",b," ",c)

x=[11,22,33,44,55,66,77,88,99,100]
// var [a,b]=x // here we are destructuring the array x and assigning its values to a,b
// console.log(a," ",b) // logs 11 22

var [a,b,...c]=x // here we are destructuring the array x and assigning its values to a,b and the rest of the values to c
console.log(a," ",b," ",c) // logs 11 22 [33, 44, 55, 66, 77, 88, 99, 100]


