function playGame(){
    //initialising score variables
    var humanScore = 0;
    var computerScore = 0;

    const resultsContainer = document.querySelector("#results");
    const results = document.createElement("h1");
    results.textContent = "Player: 0 Opponent: 0";
    resultsContainer.appendChild(results);

    //button listeners
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (humanScore != 5 && computerScore != 5){
                playRound(button.id, getComputerChoice())
            }
            else{
                alert("Game is already over!");
            }
        });
    });
    
    function winFunction(computerChoice) {
        alert("Opponent went with " + computerChoice + "! You win!");
        humanScore += 1;
    }

    function loseFunction(computerChoice) {
        alert("Opponent went with " + computerChoice + "! You lose!");
        computerScore += 1;
    }

    function tieFunction() {
        alert("It's a tie!");
    }

    function alertInvalidFunction() {
        alert("Invalid Input!");
    }

    function updateScoreboard(){
        results.textContent = "Player: " + humanScore + " Opponent:" + computerScore;
    }
    function checkWin(){
        if (humanScore === 5){
            alert("You win the game!");
        }
        else if (computerScore === 5){
            alert("Oh no! Your Opponent has won! You Lose!");
        }
    }

    function getComputerChoice(){
        let cpuprob = Math.random();
        if (cpuprob <= 0.33){
            return "rock";
        }
        else if (cpuprob <= 0.66 && cpuprob > 0.33){
            return "paper";
        }
        else if (cpuprob < 1 && cpuprob > 0.66){
            return "scissors";
        }
    } 

    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            tieFunction();
            return;
        }
        else if(humanChoice === "rock"){
            if (computerChoice === "scissors"){
                winFunction(computerChoice);
            }
            else if (computerChoice === "paper"){
                loseFunction(computerChoice);
            }
        }

        else if(humanChoice === "paper"){
            if (computerChoice === "rock"){
                winFunction(computerChoice);
            }
            else if (computerChoice === "scissors"){
                loseFunction(computerChoice);
            }
        }

        else if(humanChoice === "scissors"){
            if (computerChoice === 'paper'){
                winFunction(computerChoice);
            }
            else if (computerChoice === "rock"){
                loseFunction(computerChoice);
            }
        }
        updateScoreboard();
        checkWin();
        return;
    }
}

playGame();