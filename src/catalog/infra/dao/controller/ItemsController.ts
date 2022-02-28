import DatabaseConnection from "../../../../shared/infra/database/DatabaseConnection";
import GetItems from "../../../application/query/GetItems";
import ItemDAODatabase from "../ItemDAODatabase";

export default class ItemsController{
    
    constructor (readonly databaseConnection: DatabaseConnection) {
    }
    
    async getItems (params: any, body: any){
        const getItems = new GetItems(new ItemDAODatabase(this.databaseConnection));
        return await getItems.execute();
    }
}