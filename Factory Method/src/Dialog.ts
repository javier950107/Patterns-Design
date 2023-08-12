import { Button } from "./Button";

export abstract class Dialog {
    public abstract createButton() : Button;
    
    public render() : void{
        const button = this.createButton();
        button.render();
    }
}