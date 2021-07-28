import { flush, nobs, kinds, fifteens, straights } from "../src/app";
import { FiveCards, Hand } from "../src/types"

describe('Nobs', () => {
  it('0 points if the cut is a Jack', () => {
    const cutnobsHand: FiveCards = new Hand([ "11C", "8C", "5H", "11D", "7S"]).cards
    expect(nobs(cutnobsHand)).toBe(0)
  })

  it("1 point if the hand has a Jack and the Jack's suit matches the cut's suit", () => {
    const nobsHand: FiveCards = new Hand(["8C","11C","5H","1D", "7S"]).cards
    expect(nobs(nobsHand)).toBe(1)
  })

})

describe('Flushes', () => {
  it('0 points if there is not 4 or 5 of the same suit', () => {
    const noFlushHand: FiveCards = new Hand([ '8C','11C' ,'5H', '11D', '7S']).cards
    expect(flush(noFlushHand)).toBe(0)
  })

  it('4 points if there are 4 out of the 5 of the same suit', () => {
    const fourFlushHand: FiveCards = new Hand([ '8C', '11C', '5C', '12C', '7H' ]).cards
    expect(flush(fourFlushHand)).toBe(4)
  })

  it('5 points if it has 5 of the same suit', () => {
    const fullFlushHand: FiveCards = new Hand(['8C', '1C', '5C', '11C', '7C' ]).cards
    expect(flush(fullFlushHand)).toBe(5)
  })
})

describe('Kinds', () => {
  it('2 points for one pair', () => {
    const onePair: FiveCards = new Hand(['12C', '12H', '13C', '2C', '4H']).cards
    expect(kinds(onePair)).toBe(2)
  })

  it('4 points for two pairs', () => {
    const twoPairs: FiveCards = new Hand([ '3H', '3C', '4D', '4S', '10S' ]).cards 
    expect(kinds(twoPairs)).toBe(4)
  })

  it('6 points for three of a kind', () => {
    const threeOfAKind: FiveCards = new Hand([ '3H', '3C', '3D', '11D', '10S' ]).cards
    expect(kinds(threeOfAKind)).toBe(6)
  })

  it('12 points for four of a kind', () => {
    const fourOfAKind: FiveCards = new Hand([ '10H', '10C', '10D', '10S', '11D' ]).cards
    expect(kinds(fourOfAKind)).toBe(12)
  })
})

describe('Fifteens', () => {
  it('2 points if all of the cards add up to 15', () => {
    const handThatSumsToFifteen = new Hand(['2C', '3C', '4D', '1C', '5D']).cards
    expect(fifteens(handThatSumsToFifteen)).toBe(2)
  })

  it('2 points if four of the cards add up to 15', () => {
    const fourCardsSumToFifteen = new Hand(['4C', '4D', '2C', '5D', '1D']).cards
    expect(fifteens(fourCardsSumToFifteen)).toBe(2)
  })

  it('4 points with two 8s and one 7', () => {
    const two8sAndOne7 = new Hand(['8C', '8D', '7D', '10C', '12C']).cards
    expect(fifteens(two8sAndOne7)).toBe(4)
  })

  it('4 points with two 8s and one 7', () => {
    const two8sAndOne7 = new Hand(['8C', '8D', '7D', '10C', '12C']).cards
    expect(fifteens(two8sAndOne7)).toBe(4)
  })

  it('8 points with two 4s, two Aces, one King', () => {
    const two4sTwoAcesOneKing = new Hand(['4C','1D','4S','11D','1H']).cards
    expect(fifteens(two4sTwoAcesOneKing)).toBe(8)
  })

  it('16 points with four 5s and a king', () => {
    const four5sAndKing = new Hand(['5H','5D','5C','5S','13H']).cards
    expect(fifteens(four5sAndKing)).toBe(16)
  })
})

describe('Straights', () => {
  it("3 points for a straight of three cards", () => {
    const straightOfThree = new Hand(['10C', '1H', '11D', '12D', '2C']).cards
    expect(straights(straightOfThree)).toBe(3)
  })

  it("6 points for a double run (not counting pairs", () => {
    const doubleRun = new Hand(['2C', '2D','3H', '4H', '9C']).cards
    expect(straights(doubleRun)).toBe(6)
  })

  it("12 points two pairs within a straight", () => {
    const twoPairInAStraight = new  Hand(['2C', '2D', '3H', '4H', '3D']).cards
    expect(straights(twoPairInAStraight)).toBe(12)
  })

  it("9 points for three of kind within a straight", () => {
    const threeOfAKindInAStraight = new  Hand(['2D', '2C', '3H', '4H', '2H']).cards
    expect(straights(threeOfAKindInAStraight)).toBe(9)
  })
})