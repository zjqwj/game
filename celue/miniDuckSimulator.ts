import { FlyRocketPowered } from "./behavior/flyBehavior";
import { MallardDuck } from "./ducks/mallardDuck";
import { ModelDuck } from "./ducks/modelDuck";

class MiniDuckSimulator {
    constructor() {
        const mallard = new MallardDuck();
        mallard.performQuack();
        mallard.performFly();
        const model = new ModelDuck();
        model.performFly();
        model.setFlyBehavior(new FlyRocketPowered());
        model.performFly();
    }
}
new MiniDuckSimulator()