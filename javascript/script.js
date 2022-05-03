//get the users choice between rock, paper, scissors
let input = prompt('Choose your weapon: (rock, paper, scissors)');
let firstLetter = input.slice(0,1);
let restOfWord = input. slice(1)
let playerSelection = firstLetter.toUpperCase()+restOfWord.toLowerCase();

function computerPlay() {
    let choiceArray = ['Rock','Paper','Scissor'];
    let choice = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    return choice;
}

function playRound(cpuChoice,playerChoice) {
    if (cpuChoice=='Rock' && playerChoice=='Paper') {
        let outcome = 'Player wins! Paper beats rock';   
    } else if(cpuChoice=='Rock' && playerChoice=='Paper'){
        let outcome = 'Cpu wins! ' + cpuChoice + ' beats ' + playerChoice;
        return outcome;
    } 
    if (cpuChoice=='Paper' && playerChoice=='Scissors') {
        let outcome = 'Player wins! Paper beats rock';  
        return outcome;
    } else if(cpuChoice=='Paper'&& playerChoice=='Rock'){
        let outcome = 'Cpu wins! ' + cpuChoice + ' beats ' + playerChoice;
        return outcome;
    }
    if (cpuChoice=='Scissors' && playerChoice=='Rock') {
        let outcome = 'Player wins! Paper beats rock';  
        return outcome;
    } else if(cpuChoice=='Scissors' && playerChoice=='Paper'){
        let outcome = 'Cpu wins! ' + cpuChoice + ' beats ' + playerChoice;
        return outcome;
    }
};

console.log(playRound(computerPlay(),playerSelection));