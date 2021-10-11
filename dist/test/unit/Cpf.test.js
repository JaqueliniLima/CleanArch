"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cpf_1 = __importDefault(require("../../src/domain/entity/Cpf"));
test("Deve validar um cpf", function () {
    const cpf = new Cpf_1.default("847.903.332-05");
    expect(cpf).toBeDefined();
});
test("Não deve validar um cpf", function () {
    expect(() => new Cpf_1.default("111.111.111-11")).toThrow(new Error("Invalid cpf"));
});
