import Order from "./Order";

export default class OrderCode {
    private TEMPLATE_CODE = "00000000";

    constructor (readonly date: Date, readonly orderNumber: number) {
    }

    getOrderCode() {
        const year = this.date.getFullYear();
        return `${year}${this.generateSequence()}`;
    }

    generateSequence () {
        let number = String(this.orderNumber);
        if(number.length >= 8) return this.orderNumber;
        const template = this.TEMPLATE_CODE.substring(0, this.TEMPLATE_CODE.length - number.length);
        return `${template}${number}`;
    }

}