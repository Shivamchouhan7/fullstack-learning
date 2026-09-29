// x=[11,22,33,44,55,66,77,88,99,100]
// y=[]

// // y=x.map(n=>n)
// // y=x.filter(n=>n>0)
// y=[...x]

// console.log("The array is : ",x)
// console.log("Another array is : ",y)

a=[1,2,3,4,5,6,7]
b=[8,9,10,11,12,13,14,15,16]
// c=[...a,...b]
// c=[...a,50,60,70,100,200,...b]
c=[...a,100,200,300,...a]
console.log(c)
