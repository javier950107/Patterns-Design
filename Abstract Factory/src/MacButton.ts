import { Button } from "./Button";

export class MacButton implements Button{
    create(): void {
        console.log("Create Mac Button");
    }
}