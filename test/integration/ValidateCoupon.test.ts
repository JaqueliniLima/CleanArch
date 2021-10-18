import ValidateCouponInput from "../../src/application/dto/ValidateCouponInput";
import ValidateCoupon from "../../src/application/usecase/ValidateCoupon";
import DatabaseConnectionAdapter from "../../src/infra/database/DatabaseConnectionAdapter";
import CouponRepositoryDatabase from "../../src/infra/repository/database/CouponRepositoryDatabase";

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

test("Deve validar cupom invalido", async function(){
    const input = new ValidateCouponInput('VALE50', new Date("2021-10-10"));
    expect(async () => await validateCoupon.execute(input)).rejects.toThrow(new Error("Coupon not found"));
});