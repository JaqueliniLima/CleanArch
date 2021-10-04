"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(idItem, category, description, price, itemMeasure) {
        this.idItem = idItem;
        this.category = category;
        this.description = description;
        this.price = price;
        this.itemMeasure = itemMeasure;
    }
}
exports.default = Item;
