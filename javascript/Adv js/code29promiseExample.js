function x(s,da,hra){
    return new Promise((resolve,reject)=>{
        if(s>0 && da>0 && hra>0){
            let totalSal=s+da+hra;
            resolve(totalSal);
        }else{
            reject("invalid");
        }
    });
}
// x(10000,2000,30).then(
//     (totalSal)=>{
//         console.log("total salary is: ",totalSal);
//     }
// ).catch(err=>{
//     console.log(err);
// })

// async await
async function call(x,y,z){
    try{
        t=await call(1000,20,30)
        console.log(t);
    }
    catch(err){
        console.log(err)
    }
}