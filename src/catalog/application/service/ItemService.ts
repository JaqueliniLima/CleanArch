import ItemDAO from "../query/ItemDAO";
import ItemDTO from "../query/ItemDTO";

export default class ItemService {
    constructor (readonly itemDao: ItemDAO){
    }

    saveItem (itemDTO: ItemDTO){
        this.itemDao.save(itemDTO);
    }
}