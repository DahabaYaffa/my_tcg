import Cemetary from '../src/models/cemetary';
import Deck from '../src/models/deck';

describe("Cemetary", ()=>{
    it("should extends Deck",()=>{
        let cemetary = new Cemetary({cards : [0,1,2,3,4,5]});
        expect(cemetary instanceof Deck).toBeTruthy();
    });
})