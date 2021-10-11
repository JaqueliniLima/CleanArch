import ItemRepository from "../../domain/repository/ItemRepository";
import SimulateFreightInput from "../dto/SimulateFreightInput";

export default class SimulateFreight {

    constructor(readonly itemRepository: ItemRepository){
    }

    async execute (input: SimulateFreightInput): Promise<any> {
        const item = await this.itemRepository.findById(input.idItem);
        return {
            freight: item.getFreight()
        }
    }
}