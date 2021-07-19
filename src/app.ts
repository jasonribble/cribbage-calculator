import { group } from "./helper";
import { Hand, Point, Suit } from "./types"

function calculateHand(hand: Hand): Point {
  let points: Point;

  points += nobs(hand)
  points += flush(hand)
  points += kinds(hand)
  points += straights(hand)
  points += fifteens(hand)

  return points
}

export function nobs(hand: Hand): Point {
  const [cut, ...fiveCards] = hand

  let nobs = 0

  for (let card of fiveCards) {
    if (card.value == 11 && card.suit == cut.suit) {
      nobs++
    }
  }

  return nobs
}

export function flush(hand: Hand): Point {
  const map : Record<Suit, number> = {
    'C': 0,
    'D': 0,
    'H': 0,
    'S': 0
 }
  let hasFlush: boolean
  let flushSuit: Suit

  // console.log(map[hand[0].suit]++)
  for (const card of hand) {
    map[card.suit] = ++map[card.suit]

    if (map[card.suit] >= 4) {
      flushSuit = card.suit
      hasFlush = true
    }
  }

  // I wonder if I can remove this conditional
  return hasFlush
    ? map[flushSuit]
    : 0
}

export function kinds(hand: Hand): Point {
  let score = 0;
  const values = hand.map(card => card.value)
  const sortedValues = values.sort((a, b) => a - b)
  const groupedValues = group(sortedValues)

  for (const group of groupedValues) {
    if (group.length == 2) {
      score += 2;
    }

    if (group.length == 3) {
      score += 6;
    }

    if (group.length == 4) {
      score += 12;
    }
  }

  return score;
}

function straights(hand: Hand): Point {
  throw new Error("Function not implemented.")
}

function fifteens(hand: Hand): Point {
  throw new Error("Function not implemented.")
}
