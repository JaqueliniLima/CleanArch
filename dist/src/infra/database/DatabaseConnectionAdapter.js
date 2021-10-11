"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
class DatabaseConnectionAdapter {
    constructor() {
        this.pgp = (0, pg_promise_1.default)()("postgres://postgres:123456@localhost:5432/app");
    }
    query(statement, params) {
        return this.pgp.query(statement, params);
    }
}
exports.default = DatabaseConnectionAdapter;
