/// <reference path="./global.d.ts" />
// @ts-nocheck

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  // throw new Error('Implement the getFirstCard function');
  if(deck.length === 0) {
    return undefined;
  }
  return Number(deck.join("").charAt(0));
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  // throw new Error('Implement the getSecondCard function');
  if(deck.length <= 1) {
   return undefined;
  }
  let stringArray = deck.join("+");
  let firstPoint = stringArray.indexOf("+")+1;
  let lastPoint = stringArray.indexOf("+",stringArray.indexOf("+")+1);
  if(lastPoint === -1) {
   lastPoint = stringArray.length;
  }
  return Number(stringArray.slice(firstPoint, lastPoint));
 }

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
  // throw new Error('Implement the swapTopTwoCards function');
  let firstItem = deck[0];
  deck[0] = deck[1];
  deck[1] = firstItem;
  return deck;
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  // throw new Error('Implement the discardTopCard function');
  return [deck.shift(), deck];
}

/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
  if(deck.length === 0) {
   FACE_CARDS.unshift(undefined);
   return FACE_CARDS;
  }
  deck.splice(1,0, FACE_CARDS);
  return deck.flat();
 }
