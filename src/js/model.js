export let cardPic, cardArr;

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
  cardPic = secretCard.cards[0].image;
  cardArr = [secretCard.cards[0].value, secretCard.cards[0].suit];
};

export const state = {
  currCard: pickCard(),
};
