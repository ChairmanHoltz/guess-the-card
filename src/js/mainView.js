class mainView {
  _parentEl = document.querySelector('.main');

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
    const cardImg = this._parentEl.querySelector('.card-pic');
    cardImg.src = cardUrl;

    //hide guess fields
    const guessFields = this._parentEl.querySelector('.btn');
    guessFields.style.display = 'none';
  }

  addHandlerSubmit(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const clicked = e.target;
      if (!clicked.classList.contains('draw-btn')) return;
      handler();
    });
  }
}

export default new mainView();
