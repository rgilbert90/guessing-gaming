var number = Math.floor(Math.random() * 100);
var guessedNumber = prompt("Pick a number between 1-100");
function checkNumber() {
  if(guessedNumber < number) {
    guessedNumber = prompt("Number too low, guess again!");
    checkNumber();
  }
  else if(guessedNumber > number) {
    guessedNumber = prompt("Number too high, guess again!");
    checkNumber();
  }
  else {
    alert("You guessed right!");
  }
}
checkNumber();