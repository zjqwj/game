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
exports.CodimentDecorator = exports.Beverage = void 0;
var Beverage = /** @class */ (function () {
    function Beverage() {
        this.description = "unknown beverage";
    }
    Beverage.prototype.getDescription = function () {
        return this.description;
    };
    return Beverage;
}());
exports.Beverage = Beverage;
var CodimentDecorator = /** @class */ (function (_super) {
    __extends(CodimentDecorator, _super);
    function CodimentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CodimentDecorator;
}(Beverage));
exports.CodimentDecorator = CodimentDecorator;
