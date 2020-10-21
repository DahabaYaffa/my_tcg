
export default class Deck {
    constructor(config) {
        this.cards = config.cards;
    }

    shuffle() {
        if (this.cards.length > 1) {
            let d = this.cards
            for (let i = this.cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
            }
            if (this.cards = d) {
                return true;
            }
            else {
                return false
            }
        }
    }


    draw() {
        this.cards.shift();
        return this.cards;
    }

    getCardsCount() {
        return this.cards.length;
    }
    insertAt(card, position) {
        this.cards.splice(position, 0, card);
        return this.cards;
    }
}