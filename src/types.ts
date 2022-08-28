import isEqual from "lodash.isequal";

export type Point = number;
export type Suit = "H" | "S" | "D" | "C";
type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
type CardObj = { value: Value; suit: Suit };
type CardStr = `${Value}${Suit}`;
export type FiveCards = CardObj[];
export type FiveCardsStr = CardStr[];

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
    return `${this.value}${this.suit}` as CardStr;
  }
}

export class Hand {
  cards: CardObj[];

  constructor(cards: FiveCardsStr) {
    let cardArr: CardObj[] = [];

    if (cards.length < 5 || cards.length > 5) {
      throw new Error("A cribbage hand must have 5 cards");
    }

    for (const card of cards) {
      let newCard: CardObj = new Card(card);

      // passing the cardArr is a strange IMHO
      if (this.cardIsInHand(newCard, cardArr)) {
        throw new Error("Can only have unique cards");
      }

      cardArr.push(newCard);
    }

    this.cards = [...cardArr];
  }

  cardIsInHand(card: CardObj, cardArr: CardObj[]): boolean {
    let hasCard = false;

    for (let cardInHand of cardArr) {
      if (isEqual(card, cardInHand)) {
        hasCard = true;
      }
    }

    return hasCard;
  }
}
