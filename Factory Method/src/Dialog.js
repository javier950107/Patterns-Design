"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = void 0;
var Dialog = /** @class */ (function () {
    function Dialog() {
    }
    Dialog.prototype.render = function () {
        var button = this.createButton();
        button.render();
    };
    return Dialog;
}());
exports.Dialog = Dialog;
