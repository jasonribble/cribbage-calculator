import { combos, group } from "./helper"
import { FiveCards, Point, Suit } from "./types"

function calculateHand(hand: FiveCards): Point {
  let points: Point

  points += nobs(hand)
  points += flush(hand)
  points += kinds(hand)
  points += fifteens(hand)
  points += straights(hand)

  return points
}

export function nobs(hand: FiveCards): Point {
  const [cut, ...fourCards] = hand

  let nobs = 0

  for (let card of fourCards)
    if (card.value == 11 && card.suit == cut.suit) nobs++

  return nobs
}

export function flush(hand: FiveCards): Point {
  const map: Record<Suit, number> = {
    C: 0,
    D: 0,
    H: 0,
    S: 0,
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
  return hasFlush ? map[flushSuit] : 0
}

export function kinds(hand: FiveCards): Point {
  let score: Point = 0
  const values = hand.map((card) => card.value)
  const sortedValues = values.sort((a, b) => a - b)
  const groupedValues = group(sortedValues)

  for (const group of groupedValues) {
    if (group.length == 2) {
      score += 2
    }

    if (group.length == 3) {
      score += 6
    }

    if (group.length == 4) {
      score += 12
    }
  }

  return score
}

/**
 * Check every combinations of cards and see if it adds up to 15
 * Face cards are considered 10
 * Ignore any combination that doesn't have at least 2 elements
 * @param hand
 * @returns Points
 */
export function fifteens(hand: FiveCards): Point {
  const values = hand.map((card) => card.value)
  const valuesToTen = values.map((value) => (value > 10 ? 10 : value))

  const combinations = combos(valuesToTen)
  const pairedCombos = combinations.filter((combo) => combo.length >= 2)

  const sums = pairedCombos.map((combo) =>
    combo.reduce((acc, item) => (acc += item))
  )

  const fifteens = sums.filter((sum) => sum === 15)

  return fifteens.length * 2
}

export function straights(hand: FiveCards): Point {
  const sortedValues = hand.map((card) => card.value).sort((a, b) => a - b)

  let straightCounter = 1
  let multiplier = 1

  for (let i = 1; i < sortedValues.length; i++) {
    let previousValue = sortedValues[i - 1]
    let currentValue = sortedValues[i]

    if (previousValue === currentValue) {
      multiplier++
      if (straightCounter >= 2) {
        multiplier++
      }
      continue
    } 
    
    if (previousValue === currentValue - 1) {
      straightCounter++
      continue
    } else if (straightCounter < 3) {
      multiplier = 1
      straightCounter = 1
    }
  }

  return straightCounter < 3 ? 0 : straightCounter * multiplier
}
