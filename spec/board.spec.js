import Board from '../src/models/board';
import Hand from '../src/models/hand';

describe("Board", ()=>{
    it("should extends Hand",()=>{
        let board = new Board({cards: [0,1,2,3,4,5]});
        expect(board instanceof Hand).toBeTruthy();
    });
})