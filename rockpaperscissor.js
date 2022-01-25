// Rock Paper Scissor Game

//Get random selection of rock paper or scissor
function computerPlay(){
    const options = ["Rock", "Paper", "Scissor"];
    let computerChoice = options[Math.floor(Math.random()* options.length)];
    return computerChoice;
}

//Capitalize user input
function capitalize(word){
    let lowerWord = word.toLowerCase();
    return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
}

//Input computer and player selection and return result
function oneRound(playerSelection,computerSelection){
    if (playerSelection == computerSelection) {
        return `Draw! ${playerSelection} and ${computerSelection} are equally strong!`;
    }
    else if(playerSelection == "Rock" && computerSelection == "Paper"){
        return `You Lose!! ${computerSelection} beats ${playerSelection}`;
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissor"){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection == "Paper" && computerSelection == "Scissor"){
        return `You Lose!! ${computerSelection} beats ${playerSelection}`;
    }
    else if(playerSelection == "Scissor" && computerSelection == "Rock"){
        return `You Lose!! ${computerSelection} beats ${playerSelection}`;
    }

    else if(playerSelection == "Scissor" && computerSelection == "Paper"){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return "Something went wrong";
    }

}

//5 rounds of rock papaer scissor
function game(){
    for (let i = 0; i<5; i++){

        let playerSelection = capitalize(prompt("Play Rock,Paper or Scissor!"));

        let computerChoice = computerPlay();

        alert(`You played ${playerSelection}`)
        alert(`Computer played ${computerChoice}`);

        alert(oneRound(playerSelection,computerChoice));


    }
}






