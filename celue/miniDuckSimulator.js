"use strict";
exports.__esModule = true;
var flyBehavior_1 = require("./behavior/flyBehavior");
var mallardDuck_1 = require("./ducks/mallardDuck");
var modelDuck_1 = require("./ducks/modelDuck");
var MiniDuckSimulator = /** @class */ (function () {
    function MiniDuckSimulator() {
        var mallard = new mallardDuck_1.MallardDuck();
        mallard.performQuack();
        mallard.performFly();
        var model = new modelDuck_1.ModelDuck();
        model.performFly();
        model.setFlyBehavior(new flyBehavior_1.FlyRocketPowered());
        model.performFly();
    }
    return MiniDuckSimulator;
}());
new MiniDuckSimulator();
