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
exports.MacDialog = void 0;
var Dialog_1 = require("./Dialog");
var MacButton_1 = require("./MacButton");
var MacDialog = /** @class */ (function (_super) {
    __extends(MacDialog, _super);
    function MacDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MacDialog.prototype.createButton = function () {
        return new MacButton_1.MacButton("Mac");
    };
    return MacDialog;
}(Dialog_1.Dialog));
exports.MacDialog = MacDialog;
