import { FiveCards, Point } from "../types";

export function nobs(hand: FiveCards): Point {
  const [cut, ...fourCards] = hand;

  let nobs = 0;

  for (let card of fourCards)
    if (card.value == 11 && card.suit == cut.suit) nobs++;

  return nobs;
}
