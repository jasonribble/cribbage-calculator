export type Point = number;
export type Suit = "H" | "S" | "D" | "C";
type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
type CardObj = { value: Value; suit: Suit; };
type CardStr = `${Value}${Suit}`;
export type FiveCards = [CardObj, CardObj, CardObj, CardObj, CardObj];
type FiveCardsStr = [CardStr, CardStr, CardStr, CardStr, CardStr];


class Card {
  value: Value;
  suit: Suit;

  constructor(card: CardStr) {
    const suit: Suit = card.substring(card.length - 1) as Suit
    const value: Value = parseInt(card.substring(0, card.length - 1)) as Value

    this.suit = suit;
    this.value = value;
  }
}

export class Hand {

  constructor(cards: [FiveCardsStr]) {
    if (cards.length > 5) {
      throw new Error("Cribbage only allows for 5 cards");
    }

    for (const card of cards) {

      let newCard: CardObj = new Card(card)

      if (this.cardIsInHand(newCard)) {
        throw new Error("Can only have unique cards");
      }

      this.push(newCard);
    }
  }

  cardIsInHand(card: CardObj): boolean {
    return this.some((cardInHand) => {
      return (
        Object.entries(card).every(
          ([cardTrait, cardValue]) => cardInHand[cardTrait] === cardValue
        ) && Object.keys(card).length === Object.keys(cardInHand).length
      );
    });
  }
}
