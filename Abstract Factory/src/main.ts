import { Application } from "./Application";
import { MacFactory } from "./MacFactory";
import { WindowsFactory } from "./WindowsFactory";


const winFactory = new Application(new WindowsFactory());
winFactory.initFactory();
winFactory.createUI();

console.log("---------");

const macFactory = new Application(new MacFactory());
macFactory.initFactory();
macFactory.createUI();