import SimulateFreightInput from "../../src/checkout/application/dto/SimulateFreightInput";
import SimulateFreight from "../../src/checkout/application/usecase/SimulateFreight";
import DatabaseConnectionAdapter from "../../src/checkout/infra/database/DatabaseConnectionAdapter";
import DatabaseRepositoryFactory from "../../src/checkout/infra/factory/DatabaseRepositoryFactory";

let simulateFreight: SimulateFreight;

beforeEach(function() {
    const databaseConnection = new DatabaseConnectionAdapter();
    simulateFreight = new SimulateFreight(new DatabaseRepositoryFactory(databaseConnection));
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