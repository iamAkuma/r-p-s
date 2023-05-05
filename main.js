const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.getElementById('.modal');
const scoreboard = {
    player: 0, 
    computer: 0
}

//Play game

function play(e){
    restart.style.display= 'inline-block'
    const playerChoice=(e.target.id);
    const computerChoice = getComputerChoice();
    console.log(playerChoice, computerChoice);
    const winner = getWinner(playerChoice, computerChoice);
    console.log(playerChoice, computerChoice, winner)
}

//Get computers choice
function getComputerChoice(){
    const rand = Math.random();
    if(rand<0.34){
        return 'rock';
    } else if(rand <=0.67){
        return 'paper';
    } else {
        return 'scissors';

    }
}
//GeT GAME WINNER
function getWinner(p, c){
   //Draw ko lagi
    if(p===c){
        return 'draw';

        //ROCK AGAINST PAPER = PAPER WINS
    } else if(p==='rock'){
        if(c==='paper'){
            return 'computer';
        }
         else {
        return 'player';
    }

    //PAPER AGAINST SCISSORS = SCISSORS WIN
    } else if(p==='paper'){
        if( c==='scissors'){
            return 'computer';
        } else {
            return'player';
        }
        //SCISSORS AGAINST ROCK = ROCK WINS
        } else if(p === 'scissors'){
            if(c=== 'rock'){
                return 'computer';
            } else{
                return 'player'
            }
        }
}

//event listeners
choices.forEach(choice=> choice.addEventListener('click', play));



