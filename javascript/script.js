

function computerPlay() {
    let choiceArray = ['Rock','Paper','Scissor'];
    let choice = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    return choice;
}

function playRound(cpuChoice,playerChoice) {
    if (cpuChoice=='Rock' && playerChoice=='Paper') {
        let outcome = 'Player wins! Paper beats rock';   
        return outcome;
    } else if(cpuChoice=='Rock' && playerChoice=='Scissor'){
        let outcome = 'Cpu wins! ' + cpuChoice + ' beats ' + playerChoice;
        return outcome;
    } 

    if (cpuChoice=='Paper' && playerChoice=='Scissor') {
        let outcome = 'Player wins! Paper beats rock';  
        return outcome;
    } else if(cpuChoice=='Paper'&& playerChoice=='Rock'){
        let outcome = 'Cpu wins! ' + cpuChoice + ' beats ' + playerChoice;
        return outcome;
    }

    if (cpuChoice=='Scissor' && playerChoice=='Rock') {
        let outcome = 'Player wins! Paper beats rock';  
        return outcome;
    } else if(cpuChoice=='Scissor' && playerChoice=='Paper'){
        let outcome = 'Cpu wins! ' + cpuChoice + ' beats ' + playerChoice;
        return outcome;
    }

    if (playerChoice===cpuChoice) {
        let outcome = "It's a draw!";
        return outcome;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let input = prompt('Choose your weapon: (rock, paper, scissor)');
        let firstLetter = input.slice(0,1);
        let restOfWord = input. slice(1)
        let playerSelection = firstLetter.toUpperCase()+restOfWord.toLowerCase();

        console.log('Round ' + (i+1).toString() + ':' + playRound(computerPlay(),playerSelection));
    }
}

game();