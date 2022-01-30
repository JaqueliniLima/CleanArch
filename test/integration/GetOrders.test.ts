import PlaceOrder from "../../src/checkout/application/usecase/PlaceOrder";
import DatabaseConnectionAdapter from "../../src/checkout/infra/database/DatabaseConnectionAdapter";
import PlaceOrderInput from "../../src/checkout/application/dto/PlaceOrderInput";
import GetOrders from "../../src/checkout/application/query/GetOrders";
import OrderDAODatabase from "../../src/checkout/infra/dao/OrderDAODatabase";
import DatabaseRepositoryFactory from "../../src/checkout/infra/factory/DatabaseRepositoryFactory";
import EventBus from "../../src/shared/infra/event/EventBus";

let placeOrder: PlaceOrder;
let getOrders: GetOrders;

beforeEach(function () {
    const databaseConnection = new DatabaseConnectionAdapter();
    const databaseRepositoryFactory = new DatabaseRepositoryFactory(databaseConnection);
    const eventBus = new EventBus();
    placeOrder = new PlaceOrder(databaseRepositoryFactory, eventBus);
    const orderDAO = new OrderDAODatabase(databaseConnection);
    getOrders = new GetOrders(orderDAO);
});

test("Deve obter um pedido pelo código", async function () {
    const input = new PlaceOrderInput("847.903.332-05",[
        {
            idItem: 1,
            quantity: 1

        },
        {
            idItem: 2,
            quantity: 1

        },
        {
            idItem: 3,
            quantity: 3

        },
    ], new Date("2021-03-01"), 
    "VALE20");
    
    await placeOrder.execute(input);
    const getOrdersOutput = await getOrders.execute();
    
});