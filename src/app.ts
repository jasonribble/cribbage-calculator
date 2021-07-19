import { Hand, Point } from "./types"

function calculateHand(hand: Hand): Point {
  let points: Point;

  points += knobs(hand)
  points += flush(hand)
  points += kinds(hand)
  points += straights(hand)
  points += fifteens(hand)

  return points
}

export function knobs(hand: Hand): Point {
  const [cut, ...fiveCards] = hand

  let knobs = 0

  for (let card of fiveCards)
    if (card.value == 11 && card.suit == cut.suit)
      knobs++

  return knobs
}

function flush(hand: Hand): Point {
  throw new Error("Function not implemented.")
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
