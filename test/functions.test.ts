import { flush, nobs, kinds } from "../src/app";
import { Hand } from "../src/types"

describe('Nobs', () => {
  const nobsHand: Hand = [
    {
      suit: 'C',
      value: 8,
    },
    {
      suit: 'C',
      value: 11
    },
    {
      suit: 'H',
      value: 5,
    },
    {
      suit: 'D',
      value: 11,
    },
    {
      suit: 'S',
      value: 7,
    },
  ]

  const cutnobsHand: Hand = [
    {
      suit: 'C',
      value: 11,
    },
    {
      suit: 'C',
      value: 8
    },
    {
      suit: 'H',
      value: 5,
    },
    {
      suit: 'D',
      value: 11,
    },
    {
      suit: 'S',
      value: 7,
    },
  ]

  it('0 points if the cut is a Jack', () => {
    expect(nobs(cutnobsHand)).toBe(0)
  })

  it("1 point if the hand has a Jack and the Jack's suit matches the cut's suit", () => {
    expect(nobs(nobsHand)).toBe(1)
  })

})

describe('Flushes', () => {

  const fullFlushHand: Hand = [
    {
      suit: 'C',
      value: 8,
    },
    {
      suit: 'C',
      value: 11
    },
    {
      suit: 'C',
      value: 5,
    },
    {
      suit: 'C',
      value: 11,
    },
    {
      suit: 'C',
      value: 7,
    },
  ]

  const fourFlushHand: Hand = [
    {
      suit: 'C',
      value: 8,
    },
    {
      suit: 'C',
      value: 11
    },
    {
      suit: 'C',
      value: 5,
    },
    {
      suit: 'C',
      value: 11,
    },
    {
      suit: 'H',
      value: 7,
    },
  ]

  const noFlushHand: Hand = [
    {
      suit: 'C',
      value: 8,
    },
    {
      suit: 'C',
      value: 11
    },
    {
      suit: 'H',
      value: 5,
    },
    {
      suit: 'D',
      value: 11,
    },
    {
      suit: 'S',
      value: 7,
    },
  ]


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
  const threeOfAKind: Hand = [
    {
      suit: 'H',
      value: 3,
    },
    {
      suit: 'C',
      value: 3,
    },
    {
      suit: 'D',
      value: 3,
    },
    {
      suit: 'D',
      value: 11,
    },
    {
      suit: 'S',
      value: 10,
    },
  ]

  const fourOfAKind: Hand = [
    {
      suit: 'H',
      value: 10,
    },
    {
      suit: 'C',
      value: 10,
    },
    {
      suit: 'D',
      value: 10,
    },
    {
      suit: 'S',
      value: 10,
    },
    {
      suit: 'D',
      value: 11,
    },
  ]

  const twoPairs: Hand = [
    {
      suit: 'H',
      value: 3,
    },
    {
      suit: 'C',
      value: 3,
    },
    {
      suit: 'D',
      value: 4,
    },
    {
      suit: 'S',
      value: 4,
    },
    {
      suit: 'S',
      value: 10,
    },
  ]

  it('4 points for two pairs', () => {
    expect(kinds(twoPairs)).toBe(4)
  })

  it('6 points for three of a kind', () => [
    expect(kinds(threeOfAKind)).toBe(6)
  ])

  it('12 points for four of a kind', () => {
    expect(kinds(fourOfAKind)).toBe(12)
  })

})