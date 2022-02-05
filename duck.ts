
import { FlyBehavior } from './behavior/flyBehavior';
import { QuackBehavior} from './behavior/quackBehavior';
export abstract class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;
    public Duck() {

    }
    abstract display(): void;
    public performFly() {
        this.flyBehavior.fly()
    }
    public performQuack() {
        this.quackBehavior.quack()
    }
    public swim() {
        console.log('all ducks float, even decoys!')
    }
    public setFlyBehavior(fb: FlyBehavior) {
        this.flyBehavior = fb;
    }
    public setQuackBehavior(fb: QuackBehavior) {
        this.quackBehavior = fb;
    }
}


