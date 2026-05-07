// JavaScript Timers

// setTimeout (runs after delay )
setTimeout(()=>{
    console.log("This message is displayed after 2 seconds");
},2000);

//setInterval (runs repeatedly at specified intervals)
let intervalId = setInterval(() => {
    console.log("Running every 1 second");
}, 1000);


// clearInterval (stop interval)

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped");
}, 5000);

