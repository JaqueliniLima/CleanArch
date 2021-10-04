export default class Coupon {

    constructor (readonly code: string, readonly percentage: number, readonly expirationDate: Date){
    }

    isExpiredCoupon () {
        return new Date() > this.expirationDate;
    }

}