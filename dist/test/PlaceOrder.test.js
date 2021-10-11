"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemRepositoryMemory_1 = __importDefault(require("../src/infra/repository/memory/ItemRepositoryMemory"));
const OrderRepositoryMemory_1 = __importDefault(require("../src/infra/repository/memory/OrderRepositoryMemory"));
const PlaceOrder_1 = __importDefault(require("../src/application/usecase/PlaceOrder"));
test("Deve fazer um pedido", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const input = {
            cpf: "847.903.332-05",
            orderItems: [
                {
                    idItem: 1,
                    quantity: 1
                },
                {
                    idItem: 2,
                    quantity: 1
                },
                {
                    idItem: 3,
                    quantity: 3
                },
            ]
        };
        const placeOrder = new PlaceOrder_1.default(new ItemRepositoryMemory_1.default(), new OrderRepositoryMemory_1.default());
        const output = yield placeOrder.execute(input);
        expect(output.total).toBe(6090);
    });
});
