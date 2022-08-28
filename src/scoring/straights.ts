import { FiveCards, Point } from "../types";

export function straights(hand: FiveCards): Point {
  const sortedValues = hand.map((card) => card.value).sort((a, b) => a - b);

  let straightCounter = 1;
  let multiplier = 1;

  for (let i = 1; i < sortedValues.length; i++) {
    let previousValue = sortedValues[i - 1];
    let currentValue = sortedValues[i];

    if (previousValue === currentValue) {
      multiplier++;
      if (straightCounter >= 2) {
        multiplier++;
      }
      continue;
    }

    if (previousValue === currentValue - 1) {
      straightCounter++;
      continue;
    } else if (straightCounter < 3) {
      multiplier = 1;
      straightCounter = 1;
    }
  }

  return straightCounter < 3 ? 0 : straightCounter * multiplier;
}
