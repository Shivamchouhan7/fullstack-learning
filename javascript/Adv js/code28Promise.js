let promise=new Promise((resolve,reject)=>{
    console.log("it is a Promise ");
    return reject("Promise is rejected");
});

promise
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.log("Caught Error:", error);
    });