import ItemMeasure from "./ItemMeasure";

export default class OrderItem {
    
    constructor (readonly idItem: number, readonly price: number, readonly itemMeasure: ItemMeasure, readonly quantity: number){
    }
    
    getTotal () {
        return this.price * this.quantity;
    }

    getVolumeItem() {
        return this.itemMeasure.getVolume();
    }

    getDensityItem() {
        return this.itemMeasure.getDensity();
    }
}