"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowsFactory = void 0;
var WindowsCheckbox_1 = require("./WindowsCheckbox");
var WindowsButton_1 = require("./WindowsButton");
var WindowsFactory = /** @class */ (function () {
    function WindowsFactory() {
    }
    WindowsFactory.prototype.createButton = function () {
        return new WindowsButton_1.WindowsButton();
    };
    WindowsFactory.prototype.createCheckbox = function () {
        return new WindowsCheckbox_1.WindowsCheckbox();
    };
    return WindowsFactory;
}());
exports.WindowsFactory = WindowsFactory;
