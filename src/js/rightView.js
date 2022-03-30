import setupView from './setupView.js';

class RightView {
  #parentEl = document.querySelector('.grid-right');

  renderPlayerNames() {
    const currPlayerList = this.#parentEl.querySelector('.current-players');
    setupView.playerNamesArr.forEach(player => {
      currPlayerList.insertAdjacentHTML(
        'beforeend',
        `<li class="curr-players-item">${player}</li>`
      );
    });
  }

  highlightCurrPlayer(curr) {
    // do something
    const currPlayerArr = document.querySelectorAll('.curr-players-item');
    currPlayerArr.forEach(player => {
      player.classList.remove('highlight');
    });
    currPlayerArr[curr].classList.add('highlight');
    // setupView.playerNamesArr;
  }
}

export default new RightView();
