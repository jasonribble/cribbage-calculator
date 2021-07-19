import { flush, nobs } from "../src/app";
import { Hand } from "../src/types"

it('calculates nobs properly', () => {
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


  expect(nobs(nobsHand)).toBe(1)
  expect(nobs(cutnobsHand)).toBe(0)
})

it('calculates flushes', () => {

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

  expect(flush(fullFlushHand)).toBe(5)
  expect(flush(noFlushHand)).toBe(0)
  expect(flush(fourFlushHand)).toBe(4)

})