"use strict";
exports.__esModule = true;
var espresso_1 = require("./coffe/espresso");
var mocha_1 = require("./tiaoliao/mocha");
var StarBUzzCoffe = /** @class */ (function () {
    function StarBUzzCoffe() {
        this.beverage = new espresso_1.Espresso();
        console.log(this.beverage.getDescription() + " $ " + this.beverage.cost());
        var beverage2 = new espresso_1.DarkRoast();
        beverage2 = new mocha_1.Mocha(beverage2);
        beverage2 = new mocha_1.Mocha(beverage2);
        beverage2 = new mocha_1.Whip(beverage2);
        console.log(beverage2.getDescription() + "$" + beverage2.cost());
        var beverage3 = new espresso_1.HouseBlend();
        beverage3 = new mocha_1.Soy(beverage3);
        beverage3 = new mocha_1.Mocha(beverage3);
        beverage3 = new mocha_1.Whip(beverage3);
        console.log(beverage3.getDescription() + "$" + beverage3.cost());
    }
    return StarBUzzCoffe;
}());
var a = new StarBUzzCoffe();
