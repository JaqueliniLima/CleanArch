import DatabaseConnection from "../../../shared/infra/database/DatabaseConnection";
import OrderDAO from "../../application/query/OrderDAO";
import OrderDTO from "../../application/query/OrderDTO";
import OrderItemDTO from "../../application/query/OrderItemDTO";


export default class OrderDAODatabase implements OrderDAO{
    constructor(readonly databaseConnection: DatabaseConnection){
    }

    async getOrders(): Promise<OrderDTO[]> {
        const ordersData = await this.databaseConnection.query("select id, code, cpf, freight, total from ccca.order", []);
        return ordersData;
    }

    async getOrder(code: string): Promise<OrderDTO> {
        const [orderData] = await this.databaseConnection.query("select id, code, cpf, freight::float, total::float from ccca.order where code = $1", [code]);
        return orderData;
    }

    async getOrderItems(idOrder: number): Promise<OrderItemDTO[]> {
        const orderItemsData = await this.databaseConnection.query("select i.description, oi.quantity, oi.price::float from ccca.order_item oi join ccca.item i on (oi.id_item = i.id) where id_order = $1", [idOrder]);
        return orderItemsData;
    }

}