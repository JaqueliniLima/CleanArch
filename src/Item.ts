import ItemMeasure from "./ItemMeasure";

export default class Item {

    constructor(readonly idItem: number, readonly category: string, readonly description: string, readonly price: number, readonly itemMeasure:ItemMeasure){

    }
}