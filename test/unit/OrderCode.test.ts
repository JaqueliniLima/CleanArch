import OrderCode from "../../src/domain/entity/OrderCode";

test("Deve gerar um código de pedido", function(){
    const date = new Date("2021-03-01")
    const sequence = 1;
    const orderCode = new OrderCode(date, sequence);
    expect(orderCode.value).toBe("202100000001");
});

test("Deve gerar um código de pedido correto quando numero pedido for menor que 8", function(){
    const orderCode = new OrderCode(new Date("2021-10-10"), 4141);
    expect(orderCode.value).toBe("202100004141");
});

test("Deve gerar um código de pedido correto quando numero pedido for maior que 8", function(){
    const orderCode = new OrderCode(new Date("2021-10-10"), 4141545489);
    expect(orderCode.value).toBe("20214141545489");
});