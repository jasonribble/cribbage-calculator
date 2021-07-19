export type Suit = 'H' | 'S' | 'D' | 'C'
type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
type Card = { value: Value, suit: Suit }
// I kind of want to do this
// However, I like being able to do card.value and card.suit
// Perhaps there is a best of both worlds
// type Card = `${Suit}${Value}`

export type Hand = [Card, Card, Card, Card, Card] // TODO: Only accept unique values
export type Point = number
