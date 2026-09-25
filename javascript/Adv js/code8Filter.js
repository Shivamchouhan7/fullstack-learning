x=[10,2,5,7,18,9,11,23,13,20,34,38,27,37,40]
y=[]

// y=x.filter(n=>n%5==0)
//  y=x.filter(n=>n%5==0 && n%2==0)
 y=x.filter(n=>n>=20 && n<=30);

console.log("The actual array is : ",x)
console.log("The resultant array is : ",y)
