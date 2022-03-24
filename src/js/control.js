import * as model from './model.js';
import mainView from './mainView.js';

const controlSubmitBtn = function () {
  // mainView.renderCard(model.state.cardPic);
  mainView.renderOutcome(model.state.cardPic, model.state.cardArr);
  console.log(model.state.cardArr);
  console.log(mainView._getGuess());
};

const init = async function () {
  await model.shuffDeck();
  await model.pickCard();
  mainView.addHandlerSubmit(controlSubmitBtn);
};
init();
