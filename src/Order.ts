import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";
import Shipping from "./Shipping";

export default class Order {
    cpf: Cpf;
    orderItems: OrderItem[];
    coupon: Coupon | undefined;
    
    constructor (cpf: string) {
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
    }
    
    addItem(item: Item, quantity: number) {
        this.orderItems.push(new OrderItem(item.idItem, item.price, item.itemMeasure, quantity));
    }

    addCoupon(coupon: Coupon) {
       this.coupon = coupon;
    }

    getTotal(){
        let total = 0;
        for (const orderItem of this.orderItems){
            total += orderItem.getTotal();
        }

        if (this.coupon && !this.coupon.isExpiredCoupon()){
            total -= (total * this.coupon.percentage) / 100;
        }
        
        return total;
    }

    getShipping () {
        return new Shipping(this.orderItems).getCalculateShipping();
    }
}