export const PI = 3.14;
export const multiply = (a,b,c)=> a*b*c;
export const sum = (a,b,c)=> a+b+c;

export default (typing)=> typing;

export class Item{
    constructor(itemName,itemPrice) {
        this.itemName = itemName;
        this.itemPrice = itemPrice;
    }
}
