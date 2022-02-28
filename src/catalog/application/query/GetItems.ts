import ItemDAO from "./ItemDAO";
import ItemDTO from "./ItemDTO";

export default class GetItems {

    constructor (readonly itemDao: ItemDAO) {
    }

    async execute (): Promise<ItemDTO[]>{
        const itemsDTO = await this.itemDao.getItems();
        return itemsDTO;
    }
}