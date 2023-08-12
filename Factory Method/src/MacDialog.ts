import { Button } from "./Button";
import { Dialog } from "./Dialog";
import { MacButton } from "./MacButton";


export class MacDialog extends Dialog{
    public createButton(): Button {
        return new MacButton("Mac");
    }
}