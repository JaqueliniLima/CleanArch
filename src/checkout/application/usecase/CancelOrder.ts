import OrderCancelled from "../../../shared/domain/event/OrderCancelled";
import OrderPlaced from "../../../shared/domain/event/OrderPlaced";
import EventBus from "../../../shared/infra/event/EventBus";
import AbstractRepositoryFactory from "../../domain/factory/AbstractRepositoryFactory";
import OrderRepository from "../../domain/repository/OrderRepository";


export default class CancelOrder {
    orderRepository: OrderRepository;
    
    constructor (abstractRepositoryFactory: AbstractRepositoryFactory, readonly eventBus: EventBus){
        this.orderRepository = abstractRepositoryFactory.createOrderRepository();
    }

    async execute(code: string): Promise<void> {
        const order = await this.orderRepository.get(code);
        console.log(order);
        order.cancel();
        await this.orderRepository.update(order);
        const items = order.getOrderItems().map(orderItem => ({ idItem: orderItem.idItem, quantity: orderItem.quantity}));
        this.eventBus.publish(new OrderCancelled(code, items));
    }
}