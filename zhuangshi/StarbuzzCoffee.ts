import { Beverage } from "./beverage";
import { DarkRoast, Espresso, HouseBlend } from "./coffe/espresso";
import { Mocha, Soy, Whip } from "./tiaoliao/mocha";


class StarBUzzCoffe {
    beverage: Beverage;
    constructor() {
        this.beverage = new Espresso();
        console.log(this.beverage.getDescription() + " $ " + this.beverage.cost());

        let beverage2 = new DarkRoast();
        beverage2 = new Mocha(beverage2);
        beverage2 = new Mocha(beverage2);
        beverage2 = new Whip(beverage2);
        console.log(beverage2.getDescription() + "$" + beverage2.cost());

        let beverage3 = new HouseBlend();
        beverage3 = new Soy(beverage3);
        beverage3 = new Mocha(beverage3);
        beverage3 = new Whip(beverage3);
        console.log(beverage3.getDescription() + "$" + beverage3.cost());
    }
}
let a = new StarBUzzCoffe();