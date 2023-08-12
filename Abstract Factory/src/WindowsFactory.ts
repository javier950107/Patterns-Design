import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { GUIFactory } from "./GuiFactory";
import { WindowsCheckbox } from "./WindowsCheckbox";
import { WindowsButton } from "./WindowsButton";

export class WindowsFactory implements GUIFactory{
    createButton(): Button {
        return new WindowsButton();
    }
    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

