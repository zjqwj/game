import { Beverage, CodimentDecorator } from "../beverage";

export class Mocha extends CodimentDecorator {
    beverage:Beverage
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    public getDescription() {
        return this.beverage.getDescription()+ ',Mocha'
    }
    public cost( ){
        return 0.2 + this.beverage.cost();
    }
}
export class Soy extends CodimentDecorator {
    beverage:Beverage
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    public getDescription() {
        return this.beverage.getDescription()+ ',Soy'
    }
    public cost( ){
        return 0.15 + this.beverage.cost();
    }
}
export class Whip extends CodimentDecorator {
    beverage:Beverage
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    public getDescription() {
        return this.beverage.getDescription()+ ',Whip'
    }
    public cost( ){
        return 0.1 + this.beverage.cost();
    }
}