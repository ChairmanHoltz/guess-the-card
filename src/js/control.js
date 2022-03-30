import * as model from './model.js';
import mainView from './mainView.js';
import leftView from './leftView.js';
import setupView from './setupView.js';
import rightView from './rightView.js';

const controlStartBtn = function () {
  model.getNumPlayers(setupView.numPlayers);
  rightView.renderPlayerNames();
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
  setupView.addHandlerNumPlayers(controlNumPlayersMenu);
  setupView.addHandlerHideOverlay();
  setupView.addHandlerStartBtn(controlStartBtn);
  mainView.addHandlerSubmit(controlSubmitBtn);
  mainView.addHandlerRetry(controlRetryBtn);
  mainView.addHandlerShuffle(controlShuffleBtn);
  mainView.renderMysteryCard();
  leftView.renderDeckSize(model.state.deckSize);
};
init();
