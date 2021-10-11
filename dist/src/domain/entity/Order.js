"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cpf_1 = __importDefault(require("./Cpf"));
const OrderItem_1 = __importDefault(require("./OrderItem"));
class Order {
    constructor(cpf, issueDate = new Date()) {
        this.issueDate = issueDate;
        this.cpf = new Cpf_1.default(cpf);
        this.orderItems = [];
        this.freight = 0;
    }
    addItem(item, quantity) {
        this.freight += item.getFreight() * quantity;
        this.orderItems.push(new OrderItem_1.default(item.idItem, item.price, quantity));
    }
    addCoupon(coupon) {
        if (coupon.isExpired(this.issueDate))
            return;
        this.coupon = coupon;
    }
    getFreight() {
        return this.freight;
    }
    getTotal() {
        let total = 0;
        for (const orderItem of this.orderItems) {
            total += orderItem.getTotal();
        }
        if (this.coupon) {
            total -= (total * this.coupon.percentage) / 100;
        }
        return total;
    }
}
exports.default = Order;
