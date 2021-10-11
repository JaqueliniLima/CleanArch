"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderItem_1 = __importDefault(require("../../src/domain/entity/OrderItem"));
test("Deve criar um item de pedido", function () {
    const orderItem = new OrderItem_1.default(1, 1000, 2);
    expect(orderItem.getTotal()).toBe(2000);
});
