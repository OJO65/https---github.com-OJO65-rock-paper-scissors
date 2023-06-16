function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const  randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowercase();

    if (playerSelection === computerSelection.toLowercase()) {
        return "It's a tie!";
    }
}
