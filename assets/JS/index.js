const playGame = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    // function to
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissors');
        const playerOptions = [rockBTN, paperBtn, scissorBtn];
        const computerOptions = ['rock','paper','scissors']

        // to start playing the game
        playerOptions.forEach(option => {
            option.addEventListener('click', function(){
                const movesLeft = document.querySelector('.moves-left'); moves++;
                movesLeft.innerText = 'Moves Left: ${10-moves}';

                const choiceNumber = Math.floor(Math.random()*3);
                const computerchoice = computerOptions[choiceNumber];

                // check who wins
                winner(this.innerText,computerchoice)

                //game over after 10 moves
                if(moves == 10){
                    gameOver(playerOptions,moves-left);
                }
            })
        })

    }
}

// decide who the winner is
const winner = (player,computer) => {
    
}