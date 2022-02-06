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
exports.Decat = exports.DarkRoast = exports.HouseBlend = exports.Espresso = void 0;
var beverage_1 = require("../beverage");
var Espresso = /** @class */ (function (_super) {
    __extends(Espresso, _super);
    function Espresso() {
        var _this = _super.call(this) || this;
        _this.description = 'Espresso';
        return _this;
    }
    Espresso.prototype.cost = function () {
        return 1.99;
    };
    return Espresso;
}(beverage_1.Beverage));
exports.Espresso = Espresso;
var HouseBlend = /** @class */ (function (_super) {
    __extends(HouseBlend, _super);
    function HouseBlend() {
        var _this = _super.call(this) || this;
        _this.description = 'HouseBlend';
        return _this;
    }
    HouseBlend.prototype.cost = function () {
        return 0.89;
    };
    return HouseBlend;
}(beverage_1.Beverage));
exports.HouseBlend = HouseBlend;
var DarkRoast = /** @class */ (function (_super) {
    __extends(DarkRoast, _super);
    function DarkRoast() {
        var _this = _super.call(this) || this;
        _this.description = 'DarkRoast';
        return _this;
    }
    DarkRoast.prototype.cost = function () {
        return 1.05;
    };
    return DarkRoast;
}(beverage_1.Beverage));
exports.DarkRoast = DarkRoast;
var Decat = /** @class */ (function (_super) {
    __extends(Decat, _super);
    function Decat() {
        var _this = _super.call(this) || this;
        _this.description = 'Decat';
        return _this;
    }
    Decat.prototype.cost = function () {
        return 1.99;
    };
    return Decat;
}(beverage_1.Beverage));
exports.Decat = Decat;
