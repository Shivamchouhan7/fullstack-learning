function getComputerChoice(){
        let randomNumber = Math.random() * 3;

    if (randomNumber <= 1) return "Bat";
    else if (randomNumber <= 2) return "Ball";
    else return "Stump";
}

function getResult(computerChoice,userChoice){
    if (userChoice === computerChoice) {
        return "It's a tie";
    }
     if (
        (userChoice === "Bat" && computerChoice === "Ball") ||
        (userChoice === "Ball" && computerChoice === "Stump") ||
        (userChoice === "Stump" && computerChoice === "Bat")
    ) {
        return "User won";
    }
    else{
        return "Computer won"
    }
}
function game(userChoice){
    console.log("user chose",userChoice);
    let computerChoice=getComputerChoice();
    let result=getResult(computerChoice,userChoice);
    alert(`User chose ${userChoice} Computer chose ${computerChoice} and ${result}`);
}