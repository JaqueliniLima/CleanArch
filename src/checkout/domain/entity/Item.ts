
export default class Item {
    
    constructor(readonly idItem: number, readonly category: string, readonly description: string, readonly price: number, readonly width: number = 0, readonly heigth: number = 0, readonly length: number = 0, readonly weight: number = 0){
    }
    
    getVolume() {
        return this.width/100 * this.heigth/100 * this.length/100;
    }

    getDensity() {
        return this.weight / this.getVolume();
    }
    
    getFreight(){
        const freight = 1000 * this.getVolume() * (this.getDensity()/100);
        return (freight < 10) ? 10 : freight;
    }

}