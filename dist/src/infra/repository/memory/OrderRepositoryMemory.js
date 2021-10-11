"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderRepositoryMemory {
    constructor() {
        this.orders = [];
    }
    save(order) {
        this.orders.push(order);
    }
}
exports.default = OrderRepositoryMemory;
