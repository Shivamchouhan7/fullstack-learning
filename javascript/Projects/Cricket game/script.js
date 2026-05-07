// To maintain score 
let scoreStr=localStorage.getItem('score');
let score = JSON.parse(scoreStr) || {
    win:0,
    lost:0,
    tie:0
};

score.displayScore=function(){
         return `won:${score.win} , lost:${score.lost} , tie:${score.tie}`;
    }
function getComputerChoice(){
        let randomNumber = Math.random() * 3;

    if (randomNumber <= 1) return "Bat";
    else if (randomNumber <= 2) return "Ball";
    else return "Stump";
}

function getResult(computerChoice,userChoice){
    if (userChoice === computerChoice) {
        score.tie++;
        return "It's a tie";
    }
    if (
        (userChoice === "Bat" && computerChoice === "Ball") ||
        (userChoice === "Ball" && computerChoice === "Stump") ||
        (userChoice === "Stump" && computerChoice === "Bat")
    ) {
        score.win++;
        return "User won";
    }
    else{
        score.lost++;
        return "Computer won"
    }
}
function game(userChoice){
    console.log("user chose",userChoice)  
    if(userChoice==='Reset'){
        score.win=0;
        score.lost=0;
        score.tie=0;
        localStorage.setItem('score',JSON.stringify(score));
        document.querySelector('#user-move').innerText = '';
        document.querySelector('#computer-move').innerText = '';
        document.querySelector('#result').innerText = '';
        document.querySelector('#score').innerText = '';
        document.querySelector('#score-reset').innerText=`Score Reset Successfully`;
        // alert('Score Reset Successfully ');
        return;
    }  
    document.querySelector('#score-reset').innerText = '';
    let computerChoice=getComputerChoice();
    let result=getResult(computerChoice,userChoice);
    document.querySelector('#user-move').innerText = `you have chosen : ${userChoice}`

    document.querySelector('#computer-move').innerText =  `Computer chose : ${computerChoice}`

    document.querySelector('#result').innerText =  `result : ${result}`

    document.querySelector('#score').innerText =`score : ${score.displayScore()}`


    // alert(`User chose ${userChoice} Computer chose ${computerChoice} and ${result} \n ${score.displayScore()} `);
    localStorage.setItem('score', JSON.stringify(score));
}