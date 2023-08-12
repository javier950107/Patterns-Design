import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { GUIFactory } from "./GuiFactory";
import { MacButton } from "./MacButton";
import { MacCheckBox } from "./MacCheckbox";


export class MacFactory implements GUIFactory{
    createButton(): Button {
        return new MacButton();
    }
    createCheckbox(): Checkbox {
        return new MacCheckBox();
    }

}