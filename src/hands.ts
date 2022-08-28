import { FiveCardsStr, Hand, Point } from "./types";

type HandWithPoints = { hand: FiveCardsStr; points: Point };

export const knobsWithThreeFifteens: HandWithPoints = {
  hand: ["8C", "11C", "5H", "12D", "7S"],
  points: 7,
};

export const the29Hand: HandWithPoints = {
  hand: ["5D", "5C", "5S", "11D", "5H"],
  points: 29,
};

export const three7sAndTwo8s: HandWithPoints = {
  hand: ["7D", "7C", "8S", "7H", "8H"],
  points: 20,
};

export const zeroPoints: HandWithPoints = {
  hand: ["6D", "13H", "12S", "8D", "10D"],
  points: 0,
};

// Sample input from reddit
// https://www.reddit.com/r/dailyprogrammer/comments/75p1cs/20171011_challenge_335_intermediate_scoring_a/

// 10 points (3 fifteens - 6, a run of 3 - 3, and a nob – 1)
export const redditExample1: HandWithPoints = {
  hand: ["5D", "12S", "11D", "13H", "1C"],
  points: 10,
};

// 7 points (2 fifteens – 4, a run of 3 – 3)
export const redditExample2: HandWithPoints = {
  hand: ["8C", "1D", "10C", "6H", "7S"],
  points: 7,
};

// 4 points (2 fifteens – 4)
export const redditExample3: HandWithPoints = {
  hand: ["1C", "6D", "5C", "10C", "8C"],
  points: 4,
};
