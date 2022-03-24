import * as model from './model.js';
import mainView from './mainView.js';

const controlSubmitBtn = function () {
  mainView.renderCard(model.state.cardPic);
};

const init = async function () {
  await model.shuffDeck();
  await model.pickCard();
  mainView.addHandlerSubmit(controlSubmitBtn);
};
init();
