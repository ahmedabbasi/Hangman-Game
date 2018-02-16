// DECLARE VARIABLES
// wordBank Array
var wordBank = ['newjersey', 'california', 'utah'];

var keyHTML = document.getElementById('key');
var winsHTML = document.getElementById('wins');
var guessesremainingHTML = document.getElementById('guesses-rem');
var guessedlettersHTML = document.getElementById('guessed-letters');
var letterguessedHTML= document.getElementById('letter-guessed');
// any references to HTML DOM Elements (reset button, area for writing stats, letter blanks)
// wins/losses


var wins = 0;



// NEW GAME FUNCTION
function newGame() {
    // wins

    // reset guessesLeft to 10
    var guessesremaining = 10;
    // declare/reset pickedWord Placeholder array
    var pickedWordPlaceholder = [];
    // array for guessedLetters
    var guessedLetters = [];
    // clear out existing DOM content from previous game
    $("Hangman-Game").empty();

    // pick our word at random from the wordBank
    var pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)]; //randomly picked word from wordBank
    
    // split pickedWord into an array
    var pickedWordArray = pickedWord.split('');
    
    // for loop over pickedWordArray, at each iteration, check IF pickedWordArray[i] === " ", then push in a " " to pickedWordPlaceholder, else push a "_"
    for (i = 0; i < pickedWordArray.length; i++) {
        if (pickedWordArray[i] === " ") {
            pickedWordPlaceholder.push(" ");
        } else {
            pickedWordPlaceholder.push(" _ ");
        }
    }
    // write placeholder array to DOM
    keyHTML.textContent = pickedWordPlaceholder;
    console.log(wins);


    document.onkeyup = function (event) {
        // capture event key (letter pressed)
        var letterguessed = event.key.toLowerCase();

        // if (guessedLetters.indexOf(letterGuessed) === -1)
        if (guessedLetters.indexOf(letterguessed) === -1) {
            // Run rest of game
            // push guessedLetter into guessedLetters array  
            guessedLetters.push(letterguessed);
            


            // loop over pickedWordArray
            for (j = 0; j < pickedWordArray.length; j++) {
                // if guessedLetter === arr[i]
                if (letterguessed === pickedWordArray[j]) {
                    // replace placeholder[i] with guessedLetter
                    pickedWordPlaceholder[j] = letterguessed;
                    keyHTML.textContent = pickedWordPlaceholder.join(" ");
                }
            }


            // if placedholderArray.indexOf(guessedLetter) === -1
            if (pickedWordPlaceholder.indexOf(letterguessed) === -1) {
                // then it's a wrong guess
                // decrement guessesLeft
                guessesremaining--;
            }
            
            // check guessesLeft up against 0
            if (guessesremaining === 0) {
                // if yes, you lose
                alert("You Lose");
            }
            // check to see if placeholderArray.join('') === pickedWordArray.join('')
            if (pickedWordPlaceholder.join('') === pickedWordArray.join('')) {
                // if yes, you win!
                wins++ ;
                alert("You Win");   
            }
                    
        }

        // else alert / write to DOM that user already guessed that letter
        else {
            alert("User already guessed the word");
        }
        // Write results in HTML
        winsHTML.textContent = wins;
        guessesremainingHTML.textContent = guessesremaining;
        letterguessedHTML.textContent = letterguessed;
        guessedlettersHTML.textContent = guessedLetters;
        pickedWordPlaceholderHTML.textContent = pickedWordPlaceholder;
        pickedWordArrayHTML.textContent = pickedWordArray;

    }
    
}
newGame();

