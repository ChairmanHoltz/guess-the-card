class mainView {
  _parentEl = document.querySelector('.main');

  _getGuess() {
    const value = this._parentEl.querySelector('.value').value;
    const suit = this._parentEl.querySelector('.suit').value;
    return [value, suit];
  }

  renderCard(card) {
    const cardImg = this._parentEl.querySelector('.card-pic');
    cardImg.src = card;
    const guessFields = this._parentEl.querySelector('.btn');
    guessFields.style.display = 'none';
  }

  renderOutcome(card) {
    const guess = this._getGuess();
    guess === card ? console.log('correct') : console.log('wrong');
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
