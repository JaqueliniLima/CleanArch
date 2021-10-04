"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemMeasure {
    constructor(height, width, depth, weight) {
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.weight = weight;
    }
    getVolume() {
        return (this.height * this.width * this.depth) / 1000000;
    }
    getDensity() {
        return Math.round(this.weight / this.getVolume());
    }
}
exports.default = ItemMeasure;
