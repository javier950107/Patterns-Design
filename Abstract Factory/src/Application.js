"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
var Application = /** @class */ (function () {
    function Application(_factory) {
        this.factory = _factory;
    }
    Application.prototype.initFactory = function () {
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckbox();
    };
    Application.prototype.createUI = function () {
        this.button.create();
        this.checkbox.create();
    };
    return Application;
}());
exports.Application = Application;
