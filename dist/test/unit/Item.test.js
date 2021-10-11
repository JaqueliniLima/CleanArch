"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("../../src/domain/entity/Item"));
test("Deve criar um item", function () {
    const item = new Item_1.default(1, "Instrumentos Musicais", "Guitarra", 1000);
    expect(item.idItem).toBe(1);
});
test("Deve criar um item e calcular o volume", function () {
    const item = new Item_1.default(1, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10);
    const volume = item.getVolume();
    expect(volume).toBe(0.03);
});
test("Deve criar um item e calcular a densidade", function () {
    const item = new Item_1.default(1, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10, 3);
    const density = item.getDensity();
    expect(density).toBe(100);
});
test("Deve criar um item e calcular o frete", function () {
    const item = new Item_1.default(1, "Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10, 3);
    const freight = item.getFreight();
    expect(freight).toBe(30);
});
test("Deve criar um item e calcular o frete minimo", function () {
    const item = new Item_1.default(1, "Instrumentos Musicais", "Guitarra", 1000, 30, 10, 10, 0.9);
    const freight = item.getFreight();
    expect(freight).toBe(10);
});
