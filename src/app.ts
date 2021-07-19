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

  return hasFlush
    ? map[flushSuit]
    : 0
}

function kinds(hand: Hand): Point {
  throw new Error("Function not implemented.")
}

function straights(hand: Hand): Point {
  throw new Error("Function not implemented.")
}

function fifteens(hand: Hand): Point {
  throw new Error("Function not implemented.")
}
