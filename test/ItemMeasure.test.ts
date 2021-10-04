import ItemMeasure from "../src/ItemMeasure";

test("Deve calcular volume do item", function () {
    const itemMeasuare = new ItemMeasure(20, 15, 10, 1);
    expect(itemMeasuare.getVolume()).toBe(0.003);
});

test("Deve calcular densidade do item", function () {
    const itemMeasuare = new ItemMeasure(20, 15, 10, 1);
    expect(itemMeasuare.getDensity()).toBe(333);
});