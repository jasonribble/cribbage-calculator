import { FiveCards, Point, Suit } from "../types";
import { fifteens } from "./fifteens";
import { flush } from "./flush";
import { kinds } from "./kinds";
import { nobs } from "./nobs";
import { straights } from "./straights";

export function calculateHand(hand: FiveCards): Point {
  let points: Point = 0;

  points += nobs(hand);
  points += flush(hand);
  points += kinds(hand);
  points += fifteens(hand);
  points += straights(hand);

  return points;
}
