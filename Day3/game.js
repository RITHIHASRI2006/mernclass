let playerScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  // Show choices
  document.getElementById('moves').innerHTML = `
    <div class="move">You chose: <strong>${capitalize(userChoice)}</strong></div>
    <div class="move">Computer chose: <strong>${capitalize(computerChoice)}</strong></div>
  `;

  // Determine winner
  const resultText = determineWinner(userChoice, computerChoice);
  document.getElementById('result').textContent = resultText;

  // Update scores if applicable
  if (resultText === 'You Win!') {
    playerScore++;
    document.getElementById('playerScore').textContent = playerScore;
  } else if (resultText === 'Computer Wins!') {
    computerScore++;
    document.getElementById('computerScore').textContent = computerScore;
  }
}

function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a Tie!";
  }

  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) {
    return 'You Win!';
  } else {
    return 'Computer Wins!';
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}