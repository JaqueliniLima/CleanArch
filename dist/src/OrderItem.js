"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderItem {
    constructor(idItem, price, itemMeasure, quantity) {
        this.idItem = idItem;
        this.price = price;
        this.itemMeasure = itemMeasure;
        this.quantity = quantity;
    }
    getTotal() {
        return this.price * this.quantity;
    }
    getVolumeItem() {
        return this.itemMeasure.getVolume();
    }
    getDensityItem() {
        return this.itemMeasure.getDensity();
    }
}
exports.default = OrderItem;
