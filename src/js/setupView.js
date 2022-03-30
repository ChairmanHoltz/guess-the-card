class SetupView {
  #parentEl = document.querySelector('.overlay');
  #numPlayersMenu = document.querySelector('.num-players');
  #playerInputs = document.querySelectorAll('.player-name');
  #startBtn = document.querySelector('.start-btn');
  #currPlayer;

  constructor() {
    this.#addHandlerHideOverlay();
  }

  #hideOverlay() {
    this.#parentEl.classList.add('hidden');
  }

  renderPlayerInput(number) {
    // loop over input elements and render appropriate amount
    this.#playerInputs.forEach(player => {
      // compare number of players to data attribute
      // render if <=
      if (player.dataset.player <= number) {
        player.classList.remove('hidden');
      }

      // clear if >
      if (player.dataset.player > number) {
        player.classList.add('hidden');
      }
    });
  }

  #addHandlerHideOverlay() {
    this.#startBtn.addEventListener('click', this.#hideOverlay.bind(this));
  }

  addHandlerNumPlayers(handler) {
    this.#numPlayersMenu.addEventListener('change', function (e) {
      const numPlayers = e.target.value;
      handler(numPlayers);
    });
  }

  // addHandlerStartBtn(handler) {
  //   this.#parentEl.addEventListener('submit', function (e) {
  //     const clicked = e.target;
  //     if (!clicked.classList.contains('start-btn')) return;
  //     const formData = [...new FormData(this)];
  //     handler();
  //   });
  // }
}

export default new SetupView();
