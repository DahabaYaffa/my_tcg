import Deck from "../src/models/deck";

describe("Deck", ()=>{
    describe("click on shuffle", function(){
        it("should shuffle cards", ()=>{
            const config = {cards : [0, 1, 2, 3, 4, 5]};
            let deck = new Deck(config);
            expect(deck.shuffle()).toBe(true);
        });
    });

    describe("click on add", ()=>{
        it('should add a card on the deck at a position given',()=>{
            const config = {cards : [0, 1, 2, 3, 4, 5]};
            const position = [1];
            const card = 6
            let deck = new Deck(config);
            expect(deck.insertAt(card, position)).toContain(card);
        });
    });

    describe("click on draw", ()=>{
        it('should pick the first card of deck, return it and take it away', ()=>{
            const config = {cards : [0, 6, 1, 2, 3, 4, 5]};
            const index = [0];
            let deck = new Deck(config);
            expect(deck.draw()).not.toContain(index);

        });
    });

    describe("number of cards", ()=>{
        it('should return numbers of cards', ()=>{
            const config = {cards: [0, 6, 1, 2, 3, 4, 5]};
            const numbOfCards = config.cards.length
            let deck = new Deck(config);
            expect(deck.getCardsCount()).toBe(numbOfCards);
        });
    });

})