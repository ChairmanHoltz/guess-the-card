class SetupView {
  #parentEl = document.querySelector('.overlay');
  #numPlayersMenu = document.querySelector('.num-players');
  #playerInputs = document.querySelectorAll('.player-name');
  #currPlayer;

  constructor() {
    console.log(this.#playerInputs);
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

  addHandlerNumPlayers(handler) {
    this.#numPlayersMenu.addEventListener('change', function (e) {
      const numPlayers = e.target.value;
      handler(numPlayers);
    });
  }
}

export default new SetupView();
