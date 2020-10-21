import EventManager from '../eventManager';

export default class Pawn extends EventManager{
    constructor(life, strength, def){
        super();
        this.life = life;
        this.strength = strength;
        this.def = def;
        }
        
        getLife() {
        return this.life;
        }
        
        getStrength() {
        return this.strength;
        }
        
        getDef() {
        return this.def;
        }
        
        attack(target) {
        target.receiveAttack(this);
        }
        
        receiveAttack(opponent, strikeBack = false) {
        if(this.life <= 0 || opponent.life <= 0) {
        return;
        }
        }
}