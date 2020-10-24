let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generating a secret target number
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

//Creating a compare guess function to compare which guess is cloest to the target number
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanCompare = Math.abs(humanGuess - targetGuess);
    const computerCompare = Math.abs(computerGuess - targetGuess);
    return humanCompare <= computerCompare;
}

//Creating a update scope function to correctly increase the winners score after each round
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore ++;
    } else if (winner === 'computer') {
        computerScore ++;
    }

}

//Creating a function to update the round number after each round
const advanceRound = () => currentRoundNumber ++;