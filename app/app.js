import Deck from './deck';
import Card from './card';

const firstCard = new Card('Ace', 'Spade');
console.log('Duy\'s first card is the ' + firstCard.rank + ' of ' + firstCard.suit + 's!');

const firstDeck = new Deck();
console.log(firstDeck);

