import * as model from './model.js';
import mainView from './mainView.js';
import leftView from './leftView.js';
import setupView from './setupView.js';

const controlStartBtn = function () {
  // do something
};

const controlSubmitBtn = function () {
  mainView.renderOutcome(
    model.state.cardPic,
    model.state.cardArr,
    model.state.pastCards
  );
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

const controlNumPlayersMenu = function (numPlayers) {
  console.log(numPlayers);
  setupView.renderPlayerInput(numPlayers);
};

const init = async function () {
  await model.shuffDeck();
  await model.pickCard();
  mainView.addHandlerSubmit(controlSubmitBtn);
  mainView.addHandlerRetry(controlRetryBtn);
  mainView.addHandlerShuffle(controlShuffleBtn);
  leftView.renderDeckSize(model.state.deckSize);
  // setupView.addHandlerNumPlayers(controlNumPlayersMenu);
  // setupView.addHandlerStartBtn(controlStartBtn).bind(this);
  mainView.renderMysteryCard();
};
init();
