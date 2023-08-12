"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MacDialog_1 = require("./MacDialog");
var WindowsDialog_1 = require("./WindowsDialog");
console.log("Running in windows");
new WindowsDialog_1.WindowsDialog().render();
console.log("Running in mac");
new MacDialog_1.MacDialog().render();
