/* 
For this game:
- A player must guess a number between a min and max
- A player gets a certain amount of guesses
- Notify player of number of guesses
- Notify player of the correct answer if close
- Let player choose to play again
*/

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;


// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// Listener for play-again
game.addEventListener('mousedown', function(e){

    if(e.target.className === 'play-again'){
        window.location.reload();
    } 
});


// Listen for guess
guessBtn.addEventListener('click', function(){

    let guess = parseInt(guessInput.value);
    console.log(guess);
    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum){

        gameOver(true, `${winningNum} is correct. You win!`);

    } else {
        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game over  - lost
            gameOver(false, `Game Over, you lost. Correct number was ${winningNum}`);

        } else {
            // Game continuess - answer wrong

            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear Input
            guessInput.value = '';

            // Tell user is the wrong color
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
        }

    }
});

// Game over

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set Text Color
    message.style.color = color;

    // Let user know they won
    setMessage(msg);


    // Play Again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

}

// Get Winning Num
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min + 1)+min);

}

// Set message
function setMessage(msg, color){
    message.style.color= color;
    message.textContent = msg;
}

