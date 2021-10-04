"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemMeasure_1 = __importDefault(require("../src/ItemMeasure"));
test("Deve calcular volume do item", function () {
    const itemMeasuare = new ItemMeasure_1.default(20, 15, 10, 1);
    expect(itemMeasuare.getVolume()).toBe(0.003);
});
test("Deve calcular densidade do item", function () {
    const itemMeasuare = new ItemMeasure_1.default(20, 15, 10, 1);
    expect(itemMeasuare.getDensity()).toBe(333);
});
