import leftView from './leftView.js';

class MainView {
  #parentEl = document.querySelector('.grid-center');
  #cardImg = document.querySelector('.card-pic');
  #guessFields = document.querySelector('.guess-fields');
  #outcomeMessage = document.querySelector('.outcome');
  #retryBtn = document.querySelector('.retry-btn');
  #shuffleBtn = document.querySelector('.shuffle-btn');
  #guessedCard = document.querySelector('.guess-card');
  #guessedCardTxt = document.querySelector('.your-guess');

  #getGuess() {
    const value = this.#parentEl.querySelector('.value').value;
    const suit = this.#parentEl.querySelector('.suit').value;

    // fix code for 10s for API
    let cardCode;
    // check if 10, then process accordingly
    value.charAt(0) === '1'
      ? (cardCode = `${value.charAt(1)}${suit.charAt(0)}`)
      : (cardCode = `${value.charAt(0)}${suit.charAt(0)}`);
    return [value, suit, cardCode];
  }

  #correctGuess(currPlayer) {
    // outcome text
    this.#outcomeMessage.textContent = `${currPlayer} WINS!`;
    this.#outcomeMessage.classList.add('correct');
    this.#shuffleBtn.classList.remove('hidden');
  }

  #wrongGuess() {
    this.#outcomeMessage.textContent = 'WRONG!';
    this.#retryBtn.classList.remove('hidden');
  }

  #renderGuessedCard() {
    this.#guessedCard.classList.remove('hidden');
    this.#guessedCard.src = `https://deckofcardsapi.com/static/img/${
      this.#getGuess()[2]
    }.png`;
    this.#guessedCardTxt.classList.remove('hidden');
  }

  renderMysteryCard() {
    this.#cardImg.src = './imgs/dummy_card.svg';
    this.#outcomeMessage.classList.add('hidden');
    this.#outcomeMessage.classList.remove('correct');
    this.#retryBtn.classList.add('hidden');
    this.#guessFields.classList.remove('hidden');
    this.#shuffleBtn.classList.add('hidden');
    this.#guessedCard.classList.add('hidden');
    this.#guessedCardTxt.classList.add('hidden');
  }

  renderOutcome(cardUrl, cardArr, deck, currPlayer) {
    // grab guess data
    const guess = this.#getGuess();
    if (guess.includes('')) return;

    // check guess
    guess[0] === cardArr[0] && guess[1] === cardArr[1]
      ? this.#correctGuess(currPlayer)
      : this.#wrongGuess();

    // render card image
    this.#cardImg.src = cardUrl;

    this.#renderGuessedCard();

    // display outcome
    this.#outcomeMessage.classList.remove('hidden');

    //hide guess fields
    this.#guessFields.classList.add('hidden');
    leftView.renderPastCards(deck);
  }

  addHandlerSubmit(handler) {
    this.#parentEl.addEventListener('click', function (e) {
      const clicked = e.target;
      if (!clicked.classList.contains('submit-btn')) return;
      handler();
    });
  }

  addHandlerRetry(handler) {
    this.#parentEl.addEventListener('click', function (e) {
      const clicked = e.target;
      if (!clicked.classList.contains('retry-btn')) return;
      handler();
    });
  }

  addHandlerShuffle(handler) {
    this.#parentEl.addEventListener('click', function (e) {
      const clicked = e.target;
      if (!clicked.classList.contains('shuffle-btn')) return;
      handler();
    });
  }
}

export default new MainView();
