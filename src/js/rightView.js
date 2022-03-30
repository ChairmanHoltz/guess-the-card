import setupView from './setupView.js';

class RightView {
  #parentEl = document.querySelector('.grid-right');

  renderPlayerNames() {
    const currPlayerList = this.#parentEl.querySelector('.current-players');
    setupView.playerNamesArr.forEach(player => {
      currPlayerList.insertAdjacentHTML('beforeend', `<li>${player}</li>`);
    });
  }
}

export default new RightView();
