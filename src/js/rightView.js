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
    // grab node list of current players
    const currPlayerArr = document.querySelectorAll('.curr-players-item');

    // remove highlight from all players
    currPlayerArr.forEach(player => {
      player.classList.remove('highlight');
    });

    // add highlight to current player
    currPlayerArr[curr].classList.add('highlight');
  }
}

export default new RightView();
