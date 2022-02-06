"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Whip = exports.Soy = exports.Mocha = void 0;
var beverage_1 = require("../beverage");
var Mocha = /** @class */ (function (_super) {
    __extends(Mocha, _super);
    function Mocha(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Mocha.prototype.getDescription = function () {
        return this.beverage.getDescription() + ',Mocha';
    };
    Mocha.prototype.cost = function () {
        return 0.2 + this.beverage.cost();
    };
    return Mocha;
}(beverage_1.CodimentDecorator));
exports.Mocha = Mocha;
var Soy = /** @class */ (function (_super) {
    __extends(Soy, _super);
    function Soy(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Soy.prototype.getDescription = function () {
        return this.beverage.getDescription() + ',Soy';
    };
    Soy.prototype.cost = function () {
        return 0.15 + this.beverage.cost();
    };
    return Soy;
}(beverage_1.CodimentDecorator));
exports.Soy = Soy;
var Whip = /** @class */ (function (_super) {
    __extends(Whip, _super);
    function Whip(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Whip.prototype.getDescription = function () {
        return this.beverage.getDescription() + ',Whip';
    };
    Whip.prototype.cost = function () {
        return 0.1 + this.beverage.cost();
    };
    return Whip;
}(beverage_1.CodimentDecorator));
exports.Whip = Whip;
