import { Hand } from "../src/types";

describe('Hand', () => {

  it('throws an error if it has less than five cards', () => {
    expect(() => new Hand(["8C","11C","5H","1D"])).toThrowError()
  })

  it('throws an error if it has more than five cards', () => {
    expect(() => new Hand(["8C","11C","5H","1D", "10D", "11H"])).toThrowError()
  })

  it('throws an error if it has a duplicate', () => {
    expect(() => new Hand(["8C","8C","5H","4D", "1D"])).toThrowError()
  })

  it('creates a hand if valid cards are put in', () => {
    expect(new Hand(["1D", "2C", "3C", "8C", "2D"])).toHaveProperty('cards')
  })

})