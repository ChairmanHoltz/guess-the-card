"use strict";

export const shuffDeck = async function () {
  const newDeck = await fetch(
    "https://deckofcardsapi.com/api/deck/4ynhvp67xqx4/shuffle/?deck_count=1"
  );
  return newDeck.json();
};

export const pickCard = async function () {
  const secretCard = await fetch(
    "https://deckofcardsapi.com/api/deck/4ynhvp67xqx4/draw/?count=1"
  );
  return secretCard.json();
};

export const state = {
  currCard: pickCard(),
};
