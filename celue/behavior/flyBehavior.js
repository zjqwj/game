"use strict";
exports.__esModule = true;
exports.FlyRocketPowered = exports.FlyNoWay = exports.FlyWithWings = void 0;
var FlyWithWings = /** @class */ (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        console.log('I m flying!');
    };
    return FlyWithWings;
}());
exports.FlyWithWings = FlyWithWings;
var FlyNoWay = /** @class */ (function () {
    function FlyNoWay() {
    }
    FlyNoWay.prototype.fly = function () {
        console.log('I cant fly');
    };
    return FlyNoWay;
}());
exports.FlyNoWay = FlyNoWay;
var FlyRocketPowered = /** @class */ (function () {
    function FlyRocketPowered() {
    }
    FlyRocketPowered.prototype.fly = function () {
        console.log('I m flying with a rocket!');
    };
    return FlyRocketPowered;
}());
exports.FlyRocketPowered = FlyRocketPowered;
