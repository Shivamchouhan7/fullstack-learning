function hello() {
    for (let i = 0; i < 1000000000; i++) {
        // some time-consuming operation
    }
    console.log("Hello!!!!!!!!!!!!!!!!!");
}

console.log("welcome");
hello();//blocking function call, will block the execution of the next line until it completes

console.log("bye");