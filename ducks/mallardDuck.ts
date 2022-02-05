import { FlyWithWings } from "../behavior/flyBehavior";
import { Quack } from "../behavior/quackBehavior";
import { Duck } from "../duck";

export class MallardDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }
    display() {
        console.log('i m a real mallard duck')
    }
}