// function play(){
    // step-1: hide the home screen. to hide the screen add the class hidden to the home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

    // step-2: show the playground.
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');

    
// }


function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed);

    // stop the game if pressed 'Esc' .
    if(playerPressed === "Escape"){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet)

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point.');

        // ------------**system-2 (using reusable function)**-------------
        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore);
        const updatedScore = currentScore + 1;
        setElementValueById('current-score', updatedScore)

        // ------------**system -1 **-------------(without using function)
        // update score :
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // // console.log(currentScore)

        // // 2. increase the score by 1
        // const newScore = currentScore + 1;

        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }
    else{
        console.log('you missed. you lost a life. ');


        // -------------**system-2(using reusable function)**------------
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            // console.log('game over')
            gameOver();
        }

        // --------------** system -1 ** -----------------(without using function)
        // step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step-2: reduce the life count
        // const newLife = currentLife - 1;

        // // step-3: display the updated life count
        // currentLifeElement.innerText = newLife;
    }

}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen(show it);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColor(alphabet)
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    setElementValueById('current-life',5);
    setElementValueById('current-score',0);
    showElementById('play-ground');
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update the final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    // console.log(lastScore)
    setElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet)
    removeBackgroundColorById(currentAlphabet);
}