import { Button } from "./Button";

export class WindowsButton implements Button{

    private name : string;

    constructor(_name: string){
        this.name = _name;
    }

    public getName() : string{
        return this.name;
    }

    render(): void {
        console.log(`Rendering ${this.getName()} ...`);
        //render a button
    }
    onClick(): void {
        // click button
    }

}