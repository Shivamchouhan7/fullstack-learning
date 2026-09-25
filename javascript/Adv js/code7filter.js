x=[11,22,33,44,55,66,77,88,99,100]
y=[]

// for(v of x){
//     if(v%2==0)
//         y.push(v)
// }

// function checkEven(n){
//     if(n%2==0)
//         return true;
//     else
//         return false;
// }

// y=x.filter(checkEven)

y=x.filter(n=>n%2==0)

console.log("The actual array is : ",x)
console.log("The resultant array is : ",y)

