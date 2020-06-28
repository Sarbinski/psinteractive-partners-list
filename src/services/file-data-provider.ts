import { DataProvider } from '../pakt/data-provider';
import * as fs from 'fs';

export class FileDataProvider extends DataProvider {
    constructor() {
        super();
    }

    read(filePath: string) {
        let readData: any[] = [];
        try {
            readData = fs.readFileSync(filePath, 'utf-8').split('\n').filter(Boolean);
        } catch (e) {
            console.error(e.message, `Unable to read file: ${filePath}`);
            process.exit(1);
        }
        this.data = this.parseData(readData);
    }

    private parseData(readData: any[]) {
        const parsedRows: any[] = [];
        try {
            readData.forEach((row: any) => {
                if (typeof row === 'string') {
                    parsedRows.push(JSON.parse(row));
                }
            });
        } catch (e) {
            console.error(
                'Read file data is not corresponding to the description. Each line should be a JSON formatted.',
                e.message
            );
        }

        return parsedRows;
    }
}
