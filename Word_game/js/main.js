window.addEventListener('load', init)

//Global

//Avilable levels
const levels ={
  easy: 5,
  medium: 3,
  hard: 2
}

//To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//Dom element
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//Array of words

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'sikun',
  'rikun',
  'yoyo',
  'basket',
  'lets go',
  'food',
  'eatandeat',
  'ok then',
  'fluppy',
  'shopclues',
  'hello world',
  'dell',
  'friends',
  'moments'

];

//Intialize game
function init(){
  //show numbers in seconds UI
   seconds.innerHTML = currentLevel;  
  //Load word from array
  showWord(words);
  //start matching on word input
  wordInput.addEventListener('input', startMatch);
  //Call countdown every sec
  setInterval(countdown, 1000);
  //check game status
  setInterval(checkStatus, 50);
}

//Start match
function startMatch(){
  if(matchWords()){
   isPlaying = true;
   time = currentLevel + 1;
   showWord(words);
   wordInput.value = '';
   score++;
  }
  //if score is -1 then disply zero
  if(score === -1){
    scoreDisplay.innerHTML = 0;
  }else{
    scoreDisplay.innerHTML = score;
  } 
}

//Match Current word
function matchWords(){
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML = 'Correct!!';
    return true;
  }else{
    message.innerHTML = '';
    return false; 
  }
}

//Pick & show random word
function showWord(words){
  //Generate random array index
  const randIndex = Math.floor(Math.random() *words.length);
  //Output random word
  currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown(){
  //check time is not runout
  if(time > 0){
    //Decrement
    time--;
  }else if(time === 0){
    //game over
    isPlaying = false;
  }
  //Show time
  timeDisplay.innerHTML = time;
}

//check game status
function checkStatus(){
  if(!isPlaying && time === 0){
    message.innerHTML = 'Game over!!!!'
    score = -1;
  }
}
