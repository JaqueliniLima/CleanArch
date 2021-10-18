import SimulateFreightInput from "../../src/application/dto/SimulateFreightInput";
import SimulateFreight from "../../src/application/usecase/SimulateFreight";
import DatabaseConnectionAdapter from "../../src/infra/database/DatabaseConnectionAdapter";
import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRepositoryDatabase";

let simulateFreight: SimulateFreight;

beforeEach(function() {
    const databaseConnection = new DatabaseConnectionAdapter();
    const itemRepository = new ItemRepositoryDatabase(databaseConnection)
    simulateFreight = new SimulateFreight(itemRepository);
});

test("Deve simular o frete dos produtos", async function(){
    const input = new SimulateFreightInput([
            {
                idItem: 1,
                quantity: 1
    
            },
            {
                idItem: 2,
                quantity: 1
    
            },
            {
                idItem: 3,
                quantity: 3
    
            },
        ]
    );
    
    const output = await simulateFreight.execute(input);
    expect(output).toBe(280);
});