import { FlyNoWay } from "../behavior/flyBehavior";
import { Quack } from "../behavior/quackBehavior";
import { Duck } from "../duck";

export class ModelDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyNoWay();
    }
    public display() {
        console.log('I m a model duck')
    }
}