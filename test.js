const deck = [];
const FACE_CARDS = ['jack', 'queen', 'king'];


function insertFaceCards(deck) {
 if(deck.length === 0) {
  FACE_CARDS.unshift(undefined);
  return FACE_CARDS;
 }
 deck.splice(1,0, FACE_CARDS);
 return deck.flat();
}

console.log(insertFaceCards(deck));