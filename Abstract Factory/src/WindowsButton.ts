import { Button } from "./Button";

export class WindowsButton implements Button{
    create(): void {
        console.log("Create windows button");
    }
}