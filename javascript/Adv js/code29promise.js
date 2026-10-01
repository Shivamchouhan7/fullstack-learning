function voting(age){
    var pr=new Promise((resolve,reject)=>{
        if (age>=18){
            // resolve("You are eligible for voting");
            resolve(age);
        }  
        else{
            // reject("You are not eligible for voting");
            reject(`You are not eligible for voting and your age is ${age}`);
        }
    });
    return pr;
}

// // then catch
// voting(22).then(
//     // (msg)=>{
//     //  console.log(msg);}
//     (age)=>{
//         console.log(`You are eligible for voting and your age is ${age}`);
// })
// .catch(
//     // (err)=>{
//     // console.log(err);}
//     (msg)=>{
//         console.log(msg);
//     }

// )

// async await
async function calling(age){
    try{
        p=await voting(age);
        console.log(`You are eligible for voting and your age is ${p}`);
    }
    catch(err){
        console.log(err);
    }
}
calling(22)
calling(17)
