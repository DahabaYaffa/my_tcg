import Hand from '../src/models/hand';

describe('Hand', ()=>{
    describe('click on addCard', ()=>{
        it("should add card on the hand if there is not 7 cards",()=>{
            const config = {cards : [0,1,2,3,4],limit: 7};
            const card = 5;
            let hand = new Hand(config);
            expect(hand.addCard(card)).toBe(true);
        });
    });

    describe('click on remove card', ()=>{
        it('should remove the card at a given position', ()=>{
            const config = {cards: [0,1,2,3,4,5]};
            const card = 2;
            const position = [2];
            let hand = new Hand(config);
            expect(hand.removeCard(position)).not.toContain(card)
        });
    });

    describe("get all cards", ()=>{
        it("should return all cards",()=>{
            const config = {cards: [0,1,2,3,4,5]};
            const array = config.cards;
            let hand = new Hand(config);
            expect(hand.getAllCards()).toBe(array);
        });
    });
    describe('get number of cards', ()=>{
        it('should return number of cards',()=>{
            const config = {cards: [0,1,2,3,4,5]};
            const numberOfCards = config.cards.length;
            let hand = new Hand(config);
            expect(hand.getCardsCount()).toBe(numberOfCards);
        })
    })
})