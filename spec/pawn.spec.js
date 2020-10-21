import Pawn from '../src/models/pawn';

describe("Pawn",()=>{
    const life = 20;
    const strength = 5;
    const def = 3;

        it("should return life",()=>{
            let pawn = new Pawn(life, strength, def);
            expect(pawn.getLife()).toBe(life);
        });

        it("should return strength", ()=>{
            let pawn = new Pawn(life, strength, def);
            expect(pawn.getStrength()).toBe(strength);
        });

        it("should return def",()=>{
            let pawn = new Pawn(life, strength, def);
            expect(pawn.getDef()).toBe(def);
        });

        
    
})