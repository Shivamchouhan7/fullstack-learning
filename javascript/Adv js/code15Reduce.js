// Reduce(fun,default value) is a function used to perform/count some calculations

x=[11,22,33,44,55,66,77,88,99,105]

// sum=0
// for(v of x)
//     sum=sum+v

// sum=x.reduce((pv,cv)=>{
//     console.log(pv,"-",cv)
//     return pv+cv
// },0);

let sum=x.reduce((pv,cv)=>pv+cv,0)

console.log("The sum of elements of array is : ",sum)