import Order from "./Order";
import OrderItem from "./OrderItem";

export default class Shipping {
    private readonly DISTANCE = 1000;
    private readonly MIN_SHIPPING = 10.00;

    constructor (readonly orderItems: OrderItem[]) {
    }

    getCalculateShipping () {
        let totalShipping = 0;
        this.orderItems.forEach(orderItem => {
            totalShipping += this.getShipping(orderItem);
        });
        if(totalShipping < this.MIN_SHIPPING){
            return this.MIN_SHIPPING;
        }
        return totalShipping;
    }

    private getShipping(orderItem: OrderItem) {
        return this.DISTANCE * orderItem.getVolumeItem() * (orderItem.getDensityItem() / 100);
    }
}