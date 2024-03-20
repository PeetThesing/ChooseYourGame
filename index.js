const resultText = document.getElementById("result-text");
const resultTextGame = document.getElementById("result-game");

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
              
function game(gameNumberParameter) {
  if (gameNumberParameter === 1 ) {
  return "cleverHoch3 🧡"
} else if (gameNumberParameter === 2) {
  return "clever4ever 💜"
} else {
  return "Nochmal!! 💙"
}
}

function chooseGame(){
  const gameNumber = randomRange(1, 3)
  resultText.innerText = "Wohoooo!!! Today we'll play: "
  resultTextGame.innerText = game(gameNumber) + " 💥 😍";
}