import * as model from './model.js';
import mainView from './mainView.js';

const controlSubmitBtn = function () {
  mainView.renderCard(model.state.cardPic);
  console.log(model.state.cardArr);
  console.log(mainView._getGuess());
  mainView.renderOutcome(model.state.cardArr);
};

const init = async function () {
  await model.shuffDeck();
  await model.pickCard();
  mainView.addHandlerSubmit(controlSubmitBtn);
};
init();
