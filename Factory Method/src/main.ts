import { MacDialog } from "./MacDialog";
import { WindowsDialog } from "./WindowsDialog";


console.log("Running in windows");
new WindowsDialog().render();

console.log("Running in mac");
new MacDialog().render();