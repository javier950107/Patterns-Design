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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowsDialog = void 0;
var Dialog_1 = require("./Dialog");
var WindowsButton_1 = require("./WindowsButton");
var WindowsDialog = /** @class */ (function (_super) {
    __extends(WindowsDialog, _super);
    function WindowsDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowsDialog.prototype.createButton = function () {
        return new WindowsButton_1.WindowsButton("Windows");
    };
    return WindowsDialog;
}(Dialog_1.Dialog));
exports.WindowsDialog = WindowsDialog;
