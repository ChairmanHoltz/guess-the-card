class mainView {
  _parentEl = document.querySelector('.main');

  getGuess() {
    const number = this._parentEl.querySelector('.number');
    const suit = this._parentEl.querySelector('.suit');
  }

  renderCard(card) {
    const cardImg = this._parentEl.querySelector('.card-pic');
    cardImg.src = card;
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
