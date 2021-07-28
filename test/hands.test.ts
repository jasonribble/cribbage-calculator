import { calculateHand } from "../src/app";
import { knobsWithThreeFifteens, redditExample1, redditExample2, redditExample3, the29Hand, three7sAndTwo8s, zeroPoints } from "../src/hands";
import { Hand } from "../src/types";


describe('Calculate Hands', () => {
  it(`${knobsWithThreeFifteens.points} points for a hand with three fifteens and knobs`, () => {
    expect(calculateHand(new Hand(knobsWithThreeFifteens.hand).cards)).toBe(knobsWithThreeFifteens.points)
  })

  it(`${the29Hand.points} for the best hand in the game`, () => {
    expect(calculateHand(new Hand(the29Hand.hand).cards)).toBe(the29Hand.points)
  })

  it(`${three7sAndTwo8s.points} points for a hand with three 7s and two 8s`, () => {
    expect(calculateHand(new Hand(three7sAndTwo8s.hand).cards)).toBe(three7sAndTwo8s.points)
  })

  it(`${zeroPoints.points} points with a crappy hand`, () => {
    expect(calculateHand(new Hand(zeroPoints.hand).cards)).toBe(zeroPoints.points)
  })

  describe('Reddit examples', () => {
    it(`${redditExample1.points} points for three fifteens, a run of 3, and a nob`, () => {
      expect(calculateHand(new Hand(redditExample1.hand).cards)).toBe(redditExample1.points)
    })

    it(`${redditExample2.points} points for two fifteens and a run of 3`, () => {
      expect(calculateHand(new Hand(redditExample2.hand).cards)).toBe(redditExample2.points)
    })

    it(`${redditExample3.points} points for two fifteens`, () => {
      expect(calculateHand(new Hand(redditExample3.hand).cards)).toBe(redditExample3.points)
    })
  })
})
