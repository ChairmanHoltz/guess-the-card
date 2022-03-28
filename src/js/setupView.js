class SetupView {
  #parentEl = document.querySelector('.overlay');
  #numPlayersMenu = document.querySelector('.num-players');
  #playerInputs = document.querySelectorAll('.player-name');
  #currPlayer;

  constructor() {
    console.log(this.#playerInputs);
  }

  renderPlayerInput(number) {}

  addHandlerNumPlayers(handler) {
    this.#numPlayersMenu.addEventListener('change', function (e) {
      const numPlayers = e.target.value;
      handler(numPlayers);
    });
  }
}

export default new SetupView();
