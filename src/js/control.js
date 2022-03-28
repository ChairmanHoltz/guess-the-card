import * as model from './model.js';
import mainView from './mainView.js';
import leftView from './leftView.js';

const controlSubmitBtn = function () {
  mainView.renderOutcome(model.state.cardPic, model.state.cardArr);
  leftView.renderPastCards(model.state.pastCards);
};

const controlRetryBtn = async function () {
  mainView.renderMysteryCard();
  await model.pickCard();
  leftView.renderDeckSize(model.state.deckSize);
};

const controlShuffleBtn = async function () {
  mainView.renderMysteryCard();
  leftView.clearCardList();
  await model.shuffDeck();
  await model.pickCard();
};

const init = async function () {
  await model.shuffDeck();
  await model.pickCard();
  mainView.addHandlerSubmit(controlSubmitBtn);
  mainView.addHandlerRetry(controlRetryBtn);
  mainView.addHandlerShuffle(controlShuffleBtn);
  mainView.renderMysteryCard();
  leftView.renderDeckSize(model.state.deckSize);
};
init();
