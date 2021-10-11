import Coupon from "../entity/Coupon";

export default interface CouponRepository {
    findByCode(code: string): Coupon;
}