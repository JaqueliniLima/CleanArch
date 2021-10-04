"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("../src/Coupon"));
const Item_1 = __importDefault(require("../src/Item"));
const ItemMeasure_1 = __importDefault(require("../src/ItemMeasure"));
const Order_1 = __importDefault(require("../src/Order"));
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
    order.addItem(new Item_1.default(1, "Instrumentos Musicais", "Guitarra", 1000, new ItemMeasure_1.default(100, 30, 10, 3)), 1);
    order.addItem(new Item_1.default(2, "Instrumentos Musicais", "Amplificador", 5000, new ItemMeasure_1.default(100, 30, 10, 3)), 1);
    order.addItem(new Item_1.default(3, "Instrumentos Musicais", "Cabo", 30, new ItemMeasure_1.default(100, 30, 10, 3)), 3);
    const total = order.getTotal();
    expect(total).toBe(6090);
});
test("Deve criar um pedido com 3 itens com cupom de desconto", function () {
    const order = new Order_1.default("847.903.332-05");
    order.addItem(new Item_1.default(1, "Instrumentos Musicais", "Guitarra", 1000, new ItemMeasure_1.default(100, 30, 10, 3)), 1);
    order.addItem(new Item_1.default(2, "Instrumentos Musicais", "Amplificador", 5000, new ItemMeasure_1.default(100, 30, 10, 3)), 1);
    order.addItem(new Item_1.default(3, "Instrumentos Musicais", "Cabo", 30, new ItemMeasure_1.default(100, 30, 10, 3)), 3);
    order.addCoupon(new Coupon_1.default("VOUCHER20", 20, new Date(2021, 9, 20)));
    const total = order.getTotal();
    expect(total).toBe(4872);
});
test("Não deve criar um pedido com 3 itens com cupom de desconto expirado", function () {
    const order = new Order_1.default(CPF_VALID);
    order.addItem(new Item_1.default(1, "Instrumentos Musicais", "Guitarra", 1000, new ItemMeasure_1.default(100, 30, 10, 3)), 1);
    order.addItem(new Item_1.default(2, "Instrumentos Musicais", "Amplificador", 5000, new ItemMeasure_1.default(100, 30, 10, 3)), 1);
    order.addItem(new Item_1.default(3, "Instrumentos Musicais", "Cabo", 30, new ItemMeasure_1.default(100, 30, 10, 3)), 3);
    order.addCoupon(new Coupon_1.default("VOUCHER_CHRISTMAS", 50, new Date(2021, 9, 2)));
    const total = order.getTotal();
    expect(total).toBe(6090);
});
test("Deve calcular o valor do frete com base nas dimensões", function () {
    const order = new Order_1.default(CPF_VALID);
    order.addItem(new Item_1.default(1, "Eletrônicos", "Camera", 2000, new ItemMeasure_1.default(20, 15, 10, 1)), 1);
    order.addItem(new Item_1.default(1, "Instrumentos Musicais", "Guitarra", 1000, new ItemMeasure_1.default(100, 30, 10, 3)), 1);
    order.addItem(new Item_1.default(1, "Eletrodomesticos", "Geladeira", 3000, new ItemMeasure_1.default(200, 100, 50, 40)), 1);
    const shippingOrder = order.getShipping();
    expect(shippingOrder).toBe(439.99);
});
test("Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado", function () {
    const order = new Order_1.default(CPF_VALID);
    order.addItem(new Item_1.default(1, "Eletrônicos", "Camera", 2000, new ItemMeasure_1.default(20, 15, 10, 1)), 1);
    const shippingOrder = order.getShipping();
    expect(shippingOrder).toBe(10.00);
});
