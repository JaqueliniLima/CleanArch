import DatabaseConnection from "../../infra/database/DatabaseConnection";
import GetOrderOutput from "../dto/GetOrderOutput";
import OrderDAO from "./OrderDAO";

export default class GetOrders{

    constructor(readonly orderDAO: OrderDAO){
    }

    async execute (): Promise<GetOrderOutput[]>{
        const getOrdersOutput:GetOrderOutput[] = [];
        const ordersData = await this.orderDAO.getOrders();
        for (const orderData of ordersData){
            const orderItemsData = await this.orderDAO.getOrderItems(orderData.id);
            const getOrderOutput = new GetOrderOutput(orderData.code, orderData.cpf, orderItemsData, orderData.freight, orderData.total);
            getOrdersOutput.push(getOrderOutput);
        }
        return getOrdersOutput;
    }
}