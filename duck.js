"use strict";
exports.__esModule = true;
exports.Duck = void 0;
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.Duck = function () {
    };
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    Duck.prototype.swim = function () {
        console.log('all ducks float, even decoys!');
    };
    Duck.prototype.setFlyBehavior = function (fb) {
        this.flyBehavior = fb;
    };
    Duck.prototype.setQuackBehavior = function (fb) {
        this.quackBehavior = fb;
    };
    return Duck;
}());
exports.Duck = Duck;
