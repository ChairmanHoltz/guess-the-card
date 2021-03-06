class LeftView {
  #parentEl = document.querySelector('.grid-left');
  #pastCardList = document.querySelector('.past-cards');

  renderDeckSize(deck) {
    const cardsLeft = this.#parentEl.querySelector('.deck-size');
    cardsLeft.textContent = `Cards Left in the Deck: ${deck}`;
  }

  renderPastCards(pastCardArr) {
    const lastCard = pastCardArr[pastCardArr.length - 1];
    this.#pastCardList.insertAdjacentHTML(
      'beforeend',
      `
        <li>${lastCard[0]} of ${
        lastCard[1].slice(0, 1) + lastCard[1].slice(1).toLowerCase()
      }</li>
      `
    );
  }

  clearCardList() {
    this.#pastCardList.innerHTML = '';
  }
}

export default new LeftView();
