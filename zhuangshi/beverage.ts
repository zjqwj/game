export abstract class Beverage {
    description: string = "unknown beverage"
    public getDescription() {
        return this.description;
    }
    public abstract cost(): number;
}

export abstract class CodimentDecorator extends Beverage {

    public abstract getDescription();
}