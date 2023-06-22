let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";

}

function win(playerChoice, computerChoice) {
    const smallPlayerWord = "player".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const playerChoice_div = document.getElementById(playerChoice);
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;
    playerChoice_div.classList.add('green-glow');
    setTimeout(function () { document.getElementById(playerChoice).classList.remove('green-glow') }, 300);
}



function lose(playerChoice, computerChoice) {
    const smallPlayerWord = "player".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const playerChoice_div = document.getElementById(playerChoice);
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lost!`;
    playerChoice_div.classList.add('red-glow');
    setTimeout(function () { document.getElementById(playerChoice).classList.remove('red-glow') }, 300);
}

function draw(playerChoice, computerChoice) {
    const smallPlayerWord = "player".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const playerChoice_div = document.getElementById(playerChoice);
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} equals ${convertToWord(computerChoice)}${smallCompWord}. You Draw!`;
    playerChoice_div.classList.add('gray-glow');
    setTimeout(function () { document.getElementById(playerChoice).classList.remove('gray-glow') }, 300);
}

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })

}

main();
