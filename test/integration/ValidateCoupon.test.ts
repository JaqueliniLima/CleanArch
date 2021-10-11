import ValidateCoupon from "../../src/application/usecase/ValidateCoupon";
import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";

test("Deve validar cupom valido", async function(){
    const input = {
        coupon: 'VALE50',
        today: new Date("2021-10-10")
    }

    const validateCoupon = new ValidateCoupon(new CouponRepositoryMemory());
    const output = await validateCoupon.execute(input);
    expect(output.expired).toBeFalsy();
});

test("Deve validar cupom invalido", async function(){
    const input = {
        coupon: 'BLACKFRIDAY',
        today: new Date("2021-10-10")
    }

    const validateCoupon = new ValidateCoupon(new CouponRepositoryMemory());
    const output = await validateCoupon.execute(input);
    expect(output.expired).toBeTruthy();
});