"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coupon {
    constructor(code, percentage, expirationDate) {
        this.code = code;
        this.percentage = percentage;
        this.expirationDate = expirationDate;
    }
    isExpiredCoupon() {
        return new Date() > this.expirationDate;
    }
}
exports.default = Coupon;
