function pro(a,b,callback) {
    for (let i = 0; i < 1000000000; i++) {
        // some time-consuming operation
    }
    c=a*b;
    callback(c);
}

console.log("welcome");
// hello();//blocking function call, will block the execution of the next line until it completes
// setTimeout(hello, 2000); // non-blocking function call, will not block the execution of the next line
setTimeout(pro, 2000, 5, 6,(n)=>{console.log("product is: ",n)}); //
console.log("bye");