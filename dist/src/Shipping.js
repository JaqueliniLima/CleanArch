"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shipping {
    constructor(orderItems) {
        this.orderItems = orderItems;
        this.DISTANCE = 1000;
        this.MIN_SHIPPING = 10.00;
    }
    getCalculateShipping() {
        let totalShipping = 0;
        this.orderItems.forEach(orderItem => {
            totalShipping += this.DISTANCE * orderItem.getVolumeItem() * (orderItem.getDensityItem() / 100);
        });
        if (totalShipping < this.MIN_SHIPPING) {
            return this.MIN_SHIPPING;
        }
        return totalShipping;
    }
}
exports.default = Shipping;
