function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;

}

function getARandomAlphabet(){
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;



}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}
 

// -----------life & score part (using function)-------------
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const valueText = element.innerText;
    const value = parseInt(valueText);
    return value;
}

function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}