export type Point = number;
export type Suit = "H" | "S" | "D" | "C";
type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
type CardObj = { value: Value; suit: Suit };
type CardStr = `${Value}${Suit}`;
export type FiveCards = CardObj[];
type FiveCardsStr = CardStr[];

class Card {
  value: Value;
  suit: Suit;

  constructor(card: CardStr) {
    const suit: Suit = card.substring(card.length - 1) as Suit;
    const value: Value = parseInt(card.substring(0, card.length - 1)) as Value;

    this.suit = suit;
    this.value = value;
  }

  toString(): CardStr {
    return `${this.value}${this.suit}`
  }
}

export class Hand {
  cards: Array<CardObj>;

  constructor(cards: FiveCardsStr) {
    let cardArr: Array<CardObj> = []
    if (cards.length > 5) {
      throw new Error("Cribbage only allows for 5 cards");
    }

    for (const card of cards) {

      if (this.cardIsInHand(card)) {
        throw new Error("Can only have unique cards");
      }

      let newCard: CardObj = new Card(card);

      cardArr.push(newCard)
    }

    this.cards = [...cardArr]
  }

  cardIsInHand(card: CardStr): boolean {
    let hasCard = false

    for (let cardInHand in this.cards)
      if (cardInHand.toString() === card) 
        hasCard = false
    
    return hasCard
  }
}
