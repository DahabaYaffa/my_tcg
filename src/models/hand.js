
export default class Hand{
    constructor(config){
        this.cards = config.cards;
        this.limit = config.limit || 7;
    }

    addCard(card){
            if(this.cards.length != this.limit){
                this.cards.push(card);
                return true;
            }else{
                return false;
            }
    }

    removeCard(position){
        this.cards.splice(position,1);
        return this.cards;
    }

    getAllCards(){
        return this.cards;
    }

    getCardsCount(){
        return this.cards.length;
    }
}