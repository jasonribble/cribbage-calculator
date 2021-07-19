import { knobs } from "../src/app";
import { Hand } from "../src/types"

it('calculates knobs properly', () => {
  const knobsHand: Hand = [
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
    {
      suit: 'C',
      value: 3,
    },
  ]

  const cutKnobsHand: Hand = [
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
    {
      suit: 'C',
      value: 3,
    },
  ]


  expect(knobs(knobsHand)).toBe(1)
  expect(knobs(cutKnobsHand)).toBe(0)
})