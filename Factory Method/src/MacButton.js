"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacButton = void 0;
var MacButton = /** @class */ (function () {
    function MacButton(_name) {
        this.name = _name;
    }
    MacButton.prototype.getName = function () {
        return this.name;
    };
    MacButton.prototype.render = function () {
        console.log("Rendering ".concat(this.getName(), " ..."));
        //render button on mac
    };
    MacButton.prototype.onClick = function () {
        //click button on mac
    };
    return MacButton;
}());
exports.MacButton = MacButton;
