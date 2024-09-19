let randomNumber = Math.floor(Math.random() * 100) + 1;

let gameEnd = false;
const guessesL = document.querySelector(".guessesL");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector("#guessSubmit");
const guessField = document.querySelector(".guessField");
const resetButton = document.querySelector("#new");
//const newGame = document.querySelector("#new");


let guessCount = 1;

resetButton.style.visibility = "hidden";
//resB.display = "none";


function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guessesL.textContent = "Tentativas registradas:";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;
  

  if (userGuess === randomNumber) {
    lastResult.textContent = "Parabens! Voce acertou!";
    lastResult.style.color = "green";
    lastResult.style.fontWeight = "900";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Errado!";
    lastResult.style.color = "red";
    lastResult.style.fontWeight = "900";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Sua ultima tentativa foi muito baixa!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Sua ultima tentativa foi muito alta!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

document.addEventListener("keyup", keyDownTextField, false);

function keyDownTextField(e) {
var keyCode = e.keyCode;
  if(keyCode == 13 && guessCount <= 10 && !gameEnd) {
    checkGuess();
  } else if (keyCode == 13 && gameEnd) {
    resetGame();
  } 
}


function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  //resetButton = document.createElement("button");
  gameEnd = true;
  resetButton.textContent = "Novo jogo";
  resetButton.style.visibility = "visible";
  document.querySelector(".newG").style.textAlign = "center";
  document.querySelector(".newG").style.marginTop = "50px"; 
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }
  
  resetButton.style.visibility = "hidden";
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  

  randomNumber = Math.floor(Math.random() * 100) + 1;
  gameEnd = false;
}
