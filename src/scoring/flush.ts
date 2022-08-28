import { FiveCards, Point, Suit } from "../types";

export function flush(hand: FiveCards): Point {
  const map: Record<Suit, number> = {
    C: 0,
    D: 0,
    H: 0,
    S: 0,
  };
  let hasFlush: boolean;
  let flushSuit: Suit;

  let [cut, ...fourCards] = hand;

  // console.log(map[hand[0].suit]++)
  for (const card of fourCards) {
    map[card.suit] = ++map[card.suit];

    if (map[card.suit] >= 4) {
      flushSuit = card.suit;
      hasFlush = true;
    }
  }

  if (hasFlush && flushSuit === cut.suit) {
    map[flushSuit] = ++map[flushSuit];
  }

  // I wonder if I can remove this conditional
  return hasFlush ? map[flushSuit] : 0;
}
