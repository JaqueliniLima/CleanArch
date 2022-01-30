import Item from "../../../domain/entity/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";

export default class ItemRepositoryMemory implements ItemRepository {
    items: Item[];
    
    constructor () {
        this.items = [
            new Item(1,"Instrumentos Musicais", "Guitarra", 1000, 100, 30, 10, 3),
            new Item(2,"Instrumentos Musicais", "Amplificador",  5000, 100, 50, 50, 20),
            new Item(3,"Instrumentos Musicais", "Cabo", 30, 10, 10, 10, 0.9)
        ]
    }

    async findById(idItem: number): Promise<Item> {
        const item = await this.items.find(item => item.idItem === idItem);
        if (!item) throw new Error("Item not found");
        return item;
    }

}