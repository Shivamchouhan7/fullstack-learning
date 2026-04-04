// Greeting msg as per the current time 
let personName;
personName=prompt("Enter your name ");
function doGreeting(personName){
    let now = new Date();
    let hour=now.getHours();

    let greet=document.querySelector("#greeting");
    if(hour<12){
        greet.innerText=`Good Morning ${personName}`;
    }
    else if(hour<18){
        greet.innerText=`Good Afternoon ${personName}`;  
    }
    else{
        greet.innerText=`Good Evening ${personName}`;
    }
}
doGreeting(personName);