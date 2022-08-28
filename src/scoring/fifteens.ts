import { combos } from "../helper";
import { FiveCards, Point } from "../types";

/**
 * Check every combinations of cards and see if it adds up to 15
 * Face cards are considered 10
 * Ignore any combination that doesn't have at least 2 elements
 * @param hand
 * @returns Points
 */

export function fifteens(hand: FiveCards): Point {
  const values = hand.map((card) => card.value);
  const valuesToTen = values.map((value) => (value > 10 ? 10 : value));

  const combinations = combos(valuesToTen);
  const pairedCombos = combinations.filter((combo) => combo.length >= 2);

  const sums = pairedCombos.map((combo) => combo.reduce((acc, item) => (acc += item)));

  const fifteens = sums.filter((sum) => sum === 15);

  return fifteens.length * 2;
}
