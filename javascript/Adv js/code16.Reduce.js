x=[11,22,33,44,55,66,77,88,99,105]
// sum=0
// for(v of x)
//     sum=sum+v

// reduce (fun,def value) is used to perform some calculations with default value
// reduce((prev val,curr val)=>{},def value)

sum=x.reduce((pv,cv)=>{
    console.log(pv,"-",cv);
    return pv
},0)
console.log(sum);
count=x.reduce((pv,cv)=>console.log(pv," ",cv),0);
console.log("total count = ",count);

// enec=x.reduce((pv,cv)=>cv%2==0?pv+1:pv,0);
// console.log("total even count = ",enec);

