"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemMeasure_1 = __importDefault(require("../src/ItemMeasure"));
const OrderItem_1 = __importDefault(require("../src/OrderItem"));
test("Deve criar um item de pedido", function () {
    const orderItem = new OrderItem_1.default(1, 1000, new ItemMeasure_1.default(100, 30, 10, 3), 2);
    expect(orderItem.getTotal()).toBe(2000);
});
