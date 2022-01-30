export default class ValidateCouponInput {
    constructor (readonly coupon: string, readonly today:Date = new Date()){
    }
}