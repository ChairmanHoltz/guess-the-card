export const state = {
  cardPic: '',
  cardArr: [],
  deckSize: 0,
  pastCards: [],
  numPlayers: 0,
  currentPlayer: 0,
};

export const getNumPlayers = function (num) {
  state.numPlayers = num;
  console.log(state.numPlayers);
};

export const shuffDeck = async function () {
  const newDeck = await fetch(
    'https://deckofcardsapi.com/api/deck/4ynhvp67xqx4/shuffle/?deck_count=1'
  );
  return newDeck.json();
};

export const pickCard = async function () {
  const fetchCard = await fetch(
    'https://deckofcardsapi.com/api/deck/4ynhvp67xqx4/draw/?count=1'
  );
  const secretCard = await fetchCard.json();
  console.log(secretCard);
  state.cardPic = secretCard.cards[0].image;
  state.cardArr = [secretCard.cards[0].value, secretCard.cards[0].suit];
  state.deckSize = secretCard.remaining;
  state.pastCards.push(state.cardArr);
};
