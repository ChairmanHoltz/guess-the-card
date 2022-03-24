async function drawCard() {
  const shuffCards = await fetch(
    'https://deckofcardsapi.com/api/deck/4ynhvp67xqx4/shuffle/?deck_count=1'
  );
  const shuffJSON = await shuffCards.json();
  const randCard = await fetch(
    'https://deckofcardsapi.com/api/deck/4ynhvp67xqx4/draw/?count=1'
  );
  const randCardJSON = await randCard.json();
  console.log(randCardJSON.cards[0].value, randCardJSON.cards[0].suit);
  const cardPic = document.querySelector('.card-pic');
  cardPic.src = randCardJSON.cards[0].image;
  const cardArr = [randCardJSON.cards[0].value, randCardJSON.cards[0].suit];
  return cardArr;
}

const drawBtn = document.querySelector('.draw-btn');
const guessArea = document.querySelector('.btn');

drawBtn.addEventListener('click', function () {
  drawCard();
  drawBtn.style.display = 'none';
  guessArea.style.display = 'none';
});
