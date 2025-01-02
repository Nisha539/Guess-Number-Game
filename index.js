const inputEl = document.getElementById("input");

const guessEl = document.getElementById("Guess");

const checkbtnEl = document.getElementById("button");

const remainingChancesTextEl = document.getElementById("chances");

const remainingChancesEl = document.getElementById("chance");



let randomNumber = Math.ceil(Math.random() * 100);
totalChances = 10;

function onCheckBtn(){

  totalChances--;
  let inputValue = inputEl.value;

  if( totalChances === 0 ){

    inputValue = "";
    inputEl.disabled = true;
    guessEl.textContent = "Oops...! Bad luck😥, You lost the game."
    guessEl.style.color = "red";
    checkbtnEl.textContent = "Play Again...😉";
    remainingChancesTextEl.textContent = "No Chances Left...."

  }

  else if( totalChances < 0 ){
       window.location.reload();  
  }

  else if( inputValue == randomNumber ){
        inputEl.disabled = true;
        guessEl.textContent = "Hurrah...! Congratulations😍, You won the game.";
        guessEl.style.color = "green";
        checkbtnEl.textContent = "Play Again...😉"
        totalChances = 0;
  }

  else if(inputValue > randomNumber && inputValue < 100 ){
        guessEl.textContent = "Your Guess is High👍";
        remainingChancesEl.textContent = totalChances;
        guessEl.style.color = "red";

  }

  else if(inputValue < randomNumber && inputValue >  0 ){
    guessEl.textContent = "Your Guess is low👎.";
    remainingChancesEl.textContent = totalChances;
    guessEl.style.color = "red";
    
 }

 else{
     guessEl.textContent = "Your number is Invalid.";
     remainingChancesEl.textContent = totalChances;
     guessEl.style.color = "blue";
 }

}

