import { flush, nobs, kinds } from "../src/app";
import { FiveCards, Hand } from "../src/types"

describe('Nobs', () => {
  const nobsHand: FiveCards = new Hand(["8C","11C","5H","1D", "7S"]).cards

  const cutnobsHand: FiveCards = new Hand([ "11C", "8C", "5H", "11D", "7S"]).cards

  it('0 points if the cut is a Jack', () => {
    expect(nobs(cutnobsHand)).toBe(0)
  })

  it("1 point if the hand has a Jack and the Jack's suit matches the cut's suit", () => {
    expect(nobs(nobsHand)).toBe(1)
  })

})

describe('Flushes', () => {

  const fullFlushHand: FiveCards = new Hand(['8C', '1C', '5C', '11C', '7C' ]).cards

  const fourFlushHand: FiveCards = new Hand([ '8C', '11C', '5C', '12C', '7H' ]).cards

  const noFlushHand: FiveCards = new Hand([ '8C','11C' ,'5H', '11D', '7S']).cards


  it('0 points if there is not 4 or 5 of the same suit', () => {
    expect(flush(noFlushHand)).toBe(0)
  })

  it('4 points if there are 4 out of the 5 of the same suit', () => {
    expect(flush(fourFlushHand)).toBe(4)
  })

  it('5 points if it has 5 of the same suit', () => {
    expect(flush(fullFlushHand)).toBe(5)
  })
})

describe('Kinds', () => {
  const threeOfAKind: FiveCards = new Hand([ '3H', '3C', '3D', '11D', '10S' ]).cards

  const fourOfAKind: FiveCards = new Hand([ '10H', '10C', '10D', '10S', '11D' ]).cards

  const twoPairs: FiveCards = new Hand([ '3H', '3C', '4D', '4S', '10S' ]).cards

  it('4 points for two pairs', () => {
    expect(kinds(twoPairs)).toBe(4)
  })

  it('6 points for three of a kind', () => {
    expect(kinds(threeOfAKind)).toBe(6)
  })

  it('12 points for four of a kind', () => {
    expect(kinds(fourOfAKind)).toBe(12)
  })

})
