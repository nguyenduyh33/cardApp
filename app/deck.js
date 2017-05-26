import Card from './card';
import { ranks, suits } from './constants';

export default class Deck {

    constructor() {
        this.cards = [];

        for (let r = 0; r < ranks.length; r++) {
            for (let s = 0; s < suits.length; s++) {
                this.cards.push(new Card(ranks[r], suits[s]));
            }
        }
    }

    // This algorithim is from the Fisher-Yates shuffle
    shuffle() {
        let cardsToShuffle = [];
        cardsToShuffle = this.cards.slice();
        for (let j = 0; j < cardsToShuffle.length; j++) {
            const k = Math.floor(Math.random() * cardsToShuffle.length);
            const temp = cardsToShuffle[j];
            cardsToShuffle[j] = cardsToShuffle[k];
            cardsToShuffle[k] = temp;
        }
        this.cards = cardsToShuffle;
        return this;
    }

    sort() {
        this.cards.sort((a, b) => {
            if (ranks.indexOf(a.rank) < ranks.indexOf(b.rank)
                || (ranks.indexOf(a.rank) === ranks.indexOf(b.rank)
                    && suits.indexOf(a.suit) < suits.indexOf(b.suit))) {
                return -1;
            }
            if (ranks.indexOf(a.rank) > ranks.indexOf(b.rank)
                || (ranks.indexOf(a.rank) === ranks.indexOf(b.rank)
                    && suits.indexOf(a.suit) > suits.indexOf(b.suit))) {
                return 1;
            }
            return 0;
        });
        return this;
    }
}
