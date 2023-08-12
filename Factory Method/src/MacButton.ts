import { Button } from "./Button";

export class MacButton implements Button{

    private name : string;

    constructor(_name: string){
        this.name = _name;
    }

    public getName():string{
        return this.name;
    }

    public render(): void {
        console.log(`Rendering ${this.getName()} ...`);
        //render button on mac
    }
    public onClick(): void {
        //click button on mac
    }

}