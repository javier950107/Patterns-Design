"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowsButton = void 0;
var WindowsButton = /** @class */ (function () {
    function WindowsButton(_name) {
        this.name = _name;
    }
    WindowsButton.prototype.getName = function () {
        return this.name;
    };
    WindowsButton.prototype.render = function () {
        console.log("Rendering ".concat(this.getName(), " ..."));
        //render a button
    };
    WindowsButton.prototype.onClick = function () {
        // click button
    };
    return WindowsButton;
}());
exports.WindowsButton = WindowsButton;
