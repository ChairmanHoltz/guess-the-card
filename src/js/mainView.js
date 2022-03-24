class mainView {
  _parentEl = document.querySelector('.main');
  _cardImg = document.querySelector('.card-pic');

  async renderCard(card) {
    this._cardImg.src = await card;
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
