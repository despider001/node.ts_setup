export class Messenger {
    constructor(private port: number) {}
    printMessage (): string {
        return `App is running at ${this.port}`;
    }
}