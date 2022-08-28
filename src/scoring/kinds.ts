import { group } from "../helper";
import { FiveCards, Point } from "../types";

export function kinds(hand: FiveCards): Point {
  let score: Point = 0;
  const values = hand.map((card) => card.value);
  const sortedValues = values.sort((a, b) => a - b);
  const groupedValues = group(sortedValues);

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
