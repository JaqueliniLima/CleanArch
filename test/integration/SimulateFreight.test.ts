import SimulateFreight from "../../src/application/usecase/SimulateFreight";
import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRepositoryDatabase";
import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";

test("Deve simular o frete", async function(){
    const input = {
        idItem: 1
    }
    const simulateFreight = new SimulateFreight(new ItemRepositoryMemory());
    const output = await simulateFreight.execute(input);
    expect(output.freight).toBe(30);
});