"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("../../src/domain/entity/Coupon"));
const Item_1 = __importDefault(require("../../src/domain/entity/Item"));
const Order_1 = __importDefault(require("../../src/domain/entity/Order"));
const CPF_VALID = "847.903.332-05";
test("Não deve criar um pedido com CPF invalido", function () {
    expect(() => new Order_1.default("111.111.111-11")).toThrow(new Error("Invalid cpf"));
});
test("Deve criar um pedido", function () {
    const order = new Order_1.default("847.903.332-05");
    expect(order).toBeDefined();
});
test("Deve criar um pedido com 3 itens", function () {
    const order = new Order_1.default("847.903.332-05");
    order.addItem(new Item_1.default(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Item_1.default(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Item_1.default(3, "Instrumentos Musicais", "Cabo", 30), 3);
    const total = order.getTotal();
    expect(total).toBe(6090);
});
test("Deve criar um pedido com 3 itens com cupom de desconto", function () {
    const order = new Order_1.default("847.903.332-05");
    order.addItem(new Item_1.default(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Item_1.default(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Item_1.default(3, "Instrumentos Musicais", "Cabo", 30), 3);
    order.addCoupon(new Coupon_1.default("VOUCHER20", 20));
    const total = order.getTotal();
    expect(total).toBe(4872);
});
test("Deve criar um pedido com 3 itens com cupom de desconto esxpirado", function () {
    const order = new Order_1.default("847.903.332-05", new Date("2021-10-10"));
    order.addItem(new Item_1.default(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Item_1.default(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Item_1.default(3, "Instrumentos Musicais", "Cabo", 30), 3);
    order.addCoupon(new Coupon_1.default("VOUCHER20", 20, new Date("2021-03-01")));
    const total = order.getTotal();
    expect(total).toBe(6090);
});
test("Deve criar um pedido com 3 itens", function () {
    const order = new Order_1.default("847.903.332-05");
    order.addItem(new Item_1.default(1, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10, 3), 1);
    order.addItem(new Item_1.default(2, "Instrumentos Musicais", "Amplificador", 5000, 100, 50, 50, 20), 1);
    order.addItem(new Item_1.default(3, "Instrumentos Musicais", "Cabo", 30, 10, 10, 10, 0.9), 3);
    const freight = order.getFreight();
    expect(freight).toBe(260);
});
