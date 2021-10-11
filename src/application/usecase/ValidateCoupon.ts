import CouponRepository from "../../domain/repository/CouponRepository";
import ValidateCouponInput from "../dto/ValidateCouponInput";

export default class ValidateCoupon {
    constructor (readonly couponRepository: CouponRepository){
    }

    async execute(input: ValidateCouponInput): Promise<any> {
        const coupon = this.couponRepository.findByCode(input.coupon);
        return {
            expired: coupon.isExpired(input.today) 
        }
    }
}