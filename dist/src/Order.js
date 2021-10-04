"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cpf_1 = __importDefault(require("./Cpf"));
const OrderItem_1 = __importDefault(require("./OrderItem"));
const Shipping_1 = __importDefault(require("./Shipping"));
class Order {
    constructor(cpf) {
        this.cpf = new Cpf_1.default(cpf);
        this.orderItems = [];
    }
    addItem(item, quantity) {
        this.orderItems.push(new OrderItem_1.default(item.idItem, item.price, item.itemMeasure, quantity));
    }
    addCoupon(coupon) {
        this.coupon = coupon;
    }
    getTotal() {
        let total = 0;
        for (const orderItem of this.orderItems) {
            total += orderItem.getTotal();
        }
        if (this.coupon && !this.coupon.isExpiredCoupon()) {
            total -= (total * this.coupon.percentage) / 100;
        }
        return total;
    }
    getShipping() {
        return new Shipping_1.default(this.orderItems).getCalculateShipping();
    }
}
exports.default = Order;
