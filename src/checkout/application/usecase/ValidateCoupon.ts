import CouponRepository from "../../domain/repository/CouponRepository";
import ValidateCouponInput from "../dto/ValidateCouponInput";

export default class ValidateCoupon {
    constructor (readonly couponRepository: CouponRepository){
    }

    async execute(input: ValidateCouponInput): Promise<boolean> {
        const coupon = await this.couponRepository.findByCode(input.coupon);
        return coupon.isValid(input.today);
    }
}