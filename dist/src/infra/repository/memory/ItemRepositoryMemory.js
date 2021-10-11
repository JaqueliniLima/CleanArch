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
const Item_1 = __importDefault(require("../../../domain/entity/Item"));
class ItemRepositoryMemory {
    constructor() {
        this.items = [
            new Item_1.default(1, "Instrumentos Musicais", "Guitarra", 1000),
            new Item_1.default(2, "Instrumentos Musicais", "Amplificador", 5000),
            new Item_1.default(3, "Instrumentos Musicais", "Cabo", 30)
        ];
    }
    findById(idItem) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.items.find(item => item.idItem === idItem);
            if (!item)
                throw new Error("Item not found");
            return item;
        });
    }
}
exports.default = ItemRepositoryMemory;
