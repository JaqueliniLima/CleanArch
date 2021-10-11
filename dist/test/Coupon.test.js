"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("../src/domain/entity/Coupon"));
test("Deve criar um cupom de desconto válido", function () {
    const coupon = new Coupon_1.default("VALE20", 20, new Date("2021-10-10"));
    const isExpired = coupon.isExpired(new Date("2021-09-10"));
    expect(isExpired).toBeFalsy();
});
test("Deve criar um cupom de desconto invalido", function () {
    const coupon = new Coupon_1.default("VALE20", 20, new Date("2021-09-10"));
    const isExpired = coupon.isExpired(new Date("2021-10-10"));
    expect(isExpired).toBeTruthy();
});
test("Deve criar um cupom de desconto que não expira nunca", function () {
    const coupon = new Coupon_1.default("VALE20", 20);
    const isExpired = coupon.isExpired(new Date("2021-10-10"));
    expect(isExpired).toBeFalsy();
});
