import OrderCode from "../../src/domain/entity/OrderCode";

test("Deve gerar um código de pedido", function(){
    const orderCode = new OrderCode(new Date("2021-10-10"), 41415454);
    const code = orderCode.getOrderCode();
    expect(code).toBe("202141415454");
});

test("Deve gerar um código de pedido correto quando numero pedido for menor que 8", function(){
    const orderCode = new OrderCode(new Date("2021-10-10"), 4141);
    const code = orderCode.getOrderCode();
    expect(code).toBe("202100004141");
});

test("Deve gerar um código de pedido correto quando numero pedido for maior que 8", function(){
    const orderCode = new OrderCode(new Date("2021-10-10"), 4141545489);
    const code = orderCode.getOrderCode();
    expect(code).toBe("20214141545489");
});