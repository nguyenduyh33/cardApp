import _ from 'lodash';
import Card from '../app/card';
import Deck from '../app/deck';

/* eslint-disable prefer-arrow-callback, func-names */

describe('A Deck instance', function () {
    let testDeck;

    beforeEach(() => {
        testDeck = new Deck();
    });

    describe('when initialized', () => {
        it('should produce 52 cards', function () {
            expect(testDeck.cards.length).toBe(52);
        });
    });

    describe('when shuffled', () => {
        it('should randomize the order of the cards', function () {
            const originalCardOrder = testDeck.cards.slice();
            const result = testDeck.shuffle().cards;

            expect(result).not.toEqual(originalCardOrder);
            expect(_.difference(originalCardOrder, result).length).toEqual(0);
        });
    });

    describe('when sorted', () => {
        let twoOfSpades;
        let sixOfSpades;
        let sixOfClubs;
        let sixOfDiamonds;
        let sixOfHearts;
        let aceOfDiamonds;
        let sortedDeck;

        beforeEach(() => {
            twoOfSpades = new Card('02', 'Spade');
            sixOfSpades = new Card('06', 'Spade');
            sixOfClubs = new Card('06', 'Club');
            sixOfDiamonds = new Card('06', 'Diamond');
            sixOfHearts = new Card('06', 'Heart');
            aceOfDiamonds = new Card('Ace', 'Diamond');

            sortedDeck = new Deck();
        });

        it('should order cards of different ranks in ascending order by rank', function () {
            testDeck.cards = [sixOfClubs, twoOfSpades, aceOfDiamonds];
            sortedDeck.cards = [twoOfSpades, sixOfClubs, aceOfDiamonds];
            expect(testDeck.sort()).toEqual(sortedDeck);
        });

        it('should order cards of the same rank in ascending order by suit', function () {
            testDeck.cards = [sixOfClubs, sixOfDiamonds, sixOfHearts, sixOfSpades];
            sortedDeck.cards = [sixOfSpades, sixOfClubs, sixOfDiamonds, sixOfHearts];
            expect(testDeck.sort()).toEqual(sortedDeck);
        });

        it('should order cards of different and same ranks in ascending order by rank and suit', function () {
            testDeck.cards = [sixOfClubs, twoOfSpades, aceOfDiamonds, sixOfSpades];
            sortedDeck.cards = [twoOfSpades, sixOfSpades, sixOfClubs, aceOfDiamonds];
            expect(testDeck.sort()).toEqual(sortedDeck);
        });

        it('should order cards of different and same ranks in ascending order by rank and suit', function () {
            testDeck.cards = [sixOfClubs, twoOfSpades, sixOfClubs];
            sortedDeck.cards = [twoOfSpades, sixOfClubs, sixOfClubs];
            expect(testDeck.sort()).toEqual(sortedDeck);
        });
    });
});

/* eslint-disable prefer-arrow-callback */
