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
exports.ModelDuck = void 0;
var flyBehavior_1 = require("../behavior/flyBehavior");
var quackBehavior_1 = require("../behavior/quackBehavior");
var duck_1 = require("../duck");
var ModelDuck = /** @class */ (function (_super) {
    __extends(ModelDuck, _super);
    function ModelDuck() {
        var _this = _super.call(this) || this;
        _this.quackBehavior = new quackBehavior_1.Quack();
        _this.flyBehavior = new flyBehavior_1.FlyNoWay();
        return _this;
    }
    ModelDuck.prototype.display = function () {
        console.log('I m a model duck');
    };
    return ModelDuck;
}(duck_1.Duck));
exports.ModelDuck = ModelDuck;
