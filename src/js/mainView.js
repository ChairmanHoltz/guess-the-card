class mainView {
  _parentEl = document.querySelector('.grid-center');
  _cardImg = document.querySelector('.card-pic');

  _getGuess() {
    const value = this._parentEl.querySelector('.value').value;
    const suit = this._parentEl.querySelector('.suit').value;
    return [value, suit];
  }

  // renderCard(card) {
  //   const cardImg = this._parentEl.querySelector('.card-pic');
  //   cardImg.src = card;
  //   const guessFields = this._parentEl.querySelector('.btn');
  //   guessFields.style.display = 'none';
  // }

  renderMysteryCard() {
    this._cardImg.src = './imgs/dummy_card.svg';
  }

  renderOutcome(cardUrl, cardArr) {
    // grab outcome element
    const outcomeMessage = this._parentEl.querySelector('.outcome');

    // grab guess data
    const guess = this._getGuess();

    // evaluate guess
    guess === cardArr
      ? (outcomeMessage.textContent = 'Correct!')
      : (outcomeMessage.textContent = 'Wrong!');

    // display outcome
    outcomeMessage.classList.remove('hidden');

    // render card image
    this._cardImg.src = cardUrl;

    //hide guess fields
    const guessFields = this._parentEl.querySelector('.guess-fields');
    guessFields.classList.add('hidden');

    // dispaly guess again button
    const guessAgain = this._parentEl.querySelector('.retry-btn');
    guessAgain.classList.remove('hidden');
  }

  addHandlerSubmit(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const clicked = e.target;
      if (!clicked.classList.contains('draw-btn')) return;
      handler();
    });
  }

  addHandlerRetry(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const clicked = e.target;
      if (!clicked.classList.contains('retry-btn')) return;
      handler();
    });
  }
}

export default new mainView();
