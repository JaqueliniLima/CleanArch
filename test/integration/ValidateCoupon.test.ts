import ValidateCouponInput from "../../src/checkout/application/dto/ValidateCouponInput";
import ValidateCoupon from "../../src/checkout/application/usecase/ValidateCoupon";
import DatabaseConnectionAdapter from "../../src/checkout/infra/database/DatabaseConnectionAdapter";
import CouponRepositoryDatabase from "../../src/checkout/infra/repository/database/CouponRepositoryDatabase";

let validateCoupon: ValidateCoupon;

beforeEach(function() {
    const databaseConnection = new DatabaseConnectionAdapter();
    const couponRepository = new CouponRepositoryDatabase(databaseConnection)
    validateCoupon = new ValidateCoupon(couponRepository);
});

test("Deve validar cupom valido", async function(){
    const input = new ValidateCouponInput('VALE20', new Date("2021-10-10"));
    const isValid = await validateCoupon.execute(input);
    expect(isValid).toBeTruthy();
});

test.skip("Deve validar cupom invalido", async function(){
    const input = new ValidateCouponInput('VALE50', new Date("2021-10-10"));
    expect(async () => await validateCoupon.execute(input)).rejects.toThrow(new Error("Coupon not found"));
});