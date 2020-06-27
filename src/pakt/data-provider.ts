export abstract class DataProvider {
    protected data: any;
    constructor() {
        this.data = {};
    }

    abstract read(...args: any[]): any;

    getData(): any {
        return this.data;
    }
}
