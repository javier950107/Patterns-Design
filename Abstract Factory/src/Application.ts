import { GUIFactory } from "./GuiFactory";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";

export class Application {
    private factory : GUIFactory;
    private button: Button;
    private checkbox: Checkbox;

    constructor(_factory: GUIFactory){
        this.factory = _factory;
    }

    public initFactory():void{
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckbox();
    }

    public createUI():void{
        this.button.create();
        this.checkbox.create();
    }


}