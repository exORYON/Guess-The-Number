class Game {
  static input = document.querySelector('#input');
  static button = document.querySelector('#button');
  static lifesContainer = document.querySelector('#lifes');

  static rulesText = document.querySelector('#rules');
  static roundText = document.querySelector('#round');
  static pointsText = document.querySelector('#points');

  constructor() {
    this.points = 0;
    this.round = 1;
    this.lifes = 3;
    
    this.generateNewRandomNumber();

    Game.button.addEventListener('click', this.checkAnswer.bind(this));
    Game.input.addEventListener('input', this.switchButton);
    
    Game.button.disabled = true;
  }

  generateNewRandomNumber() {
    if (this.round === 1) {
      this.randomNumber = Math.round(Math.random());
    } else {
      this.randomNumber = Math.round(Math.random() * this.round);
    }
  }

  switchButton() {
    if (Game.input.value === '') {
      Game.button.disabled = true;
      Game.button.style.cursor = 'not-allowed';
    } else {
      Game.button.disabled = false;
      Game.button.style.cursor = 'pointer';
    }
  }

  checkAnswer() {
    const userAnswer = Number(Game.input.value);

    if (userAnswer === this.randomNumber) {
      this.nextRound();
    } else {
      this.removeOneLife()
    }

    Game.input.focus();
  }

  nextRound() {
    this.points += 5;
    this.round++;
    this.generateNewRandomNumber();

    alert('Correct!');

    this.updateView();
  }

  removeOneLife() {
    this.lifes--;

    if (this.lifes === 0) {
      this.gameOver();
    } else {
      const hearts = Game.lifesContainer.children;

      Game.lifesContainer.removeChild(
        hearts[hearts.length - 1]
      );

      alert('Incorrect! Try again!');
    }
  }

  gameOver() {
    alert(`Game over 💀 | The number was ${this.randomNumber}
    Round: ${this.round} | Points: ${this.points}`);
    
    this.points = 0;
    this.round = 1;
    this.lifes = 3;
    
    Game.lifesContainer.innerHTML = `
    <img class="game__life" src="images/heart.png" class="heart" id="firstLife" alt="Life icon 1">
        <img class="game__life" src="images/heart.png" class="heart" id="secondLife" alt="Life icon 2">
        <img class="game__life" src="images/heart.png" class="heart" id="thirdLife" alt="Life icon 3">
    `;
    Game.input.value = '';
    
    this.switchButton();
    this.updateView();
  }

  updateView() {
    Game.input.max = this.round;
    Game.roundText.textContent = `Round ${this.round}`;
    Game.pointsText.textContent = `Points ${this.points}`;
    Game.rulesText.textContent = `Guess a number between (0-${this.round})`;
  }
}

const game = new Game();