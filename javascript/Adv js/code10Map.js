x=[11,22,33,44,55,66,77,88,99,100]
y=[]

// for(v of x)
//     y.push(v*v)

// function transform(n){
//     return n*n
// }
// function transform(n){
//     if(n%2==0)
//         return n*2
//     else
//         return n/2
// }

// y=x.map(transform)
// y=x.map(n=>n*2)
y=x.map(n=>(n%2==0)?n*2:n/2)

console.log("The actual array is : ",x)
console.log("The resultant array is : ",y)
