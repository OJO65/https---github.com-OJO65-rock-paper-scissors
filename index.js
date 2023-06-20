const playerScore = 0;
const computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
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
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    const smallPlayerWord = "player".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;

}

function lose(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    const smallPlayerWord = "player".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lost!`;
}

function draw(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    const smallPlayerWord = "player".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} equals ${convertToWord(computerChoice)}${smallCompWord}. You Draw!`;

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

