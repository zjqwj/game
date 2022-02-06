"use strict";
exports.__esModule = true;
exports.Squeak = exports.MuteQuack = exports.Quack = void 0;
var Quack = /** @class */ (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        console.log('quack');
    };
    return Quack;
}());
exports.Quack = Quack;
var MuteQuack = /** @class */ (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () {
        console.log(' silence ');
    };
    return MuteQuack;
}());
exports.MuteQuack = MuteQuack;
var Squeak = /** @class */ (function () {
    function Squeak() {
    }
    Squeak.prototype.quack = function () {
        console.log('squeak');
    };
    return Squeak;
}());
exports.Squeak = Squeak;
