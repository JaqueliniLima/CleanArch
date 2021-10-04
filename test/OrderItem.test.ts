import ItemMeasure from "../src/ItemMeasure";
import OrderItem from "../src/OrderItem";

test("Deve criar um item de pedido", function() {
    const orderItem = new OrderItem(1, 1000,new ItemMeasure(100, 30, 10, 3),2);
    expect(orderItem.getTotal()).toBe(2000);
});