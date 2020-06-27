import { IValidator } from '../pakt/validator';
import { IIndexable } from '../pakt/types/indexable-object';

export class ValidateData implements IValidator {
    private errors: string[] = [];
    private validatePropertiesAndType: IIndexable = [];

    constructor(validatePropertiesAndType: IIndexable) {
        this.validatePropertiesAndType = validatePropertiesAndType;
    }

    getErrors(): string[] {
        return this.errors;
    }

    validate(data: any): boolean {
        if (!Array.isArray(data)) {
            this.errors.push('Read data should be an Array.');
            return false;
        }
        if (!(data as any[]).length) {
            this.errors.push('The read data is empty.');
            return false;
        }

        try {
            data.forEach((element) => {
                this.validateRow(element);
            });
        } catch (e) {
            this.errors.push(e.message);
            return false;
        }

        return true;
    }

    private validateRow(row: any) {
        if (typeof row !== 'object' || row === null) {
            throw new Error(
                'Read row is not corresponding to the description. The row is now an Object'
            );
        }

        Object.keys(row as Object).forEach((key) => {
            if (
                !this.validatePropertiesAndType.hasOwnProperty(key) ||
                typeof this.validatePropertiesAndType[key] !== (row as IIndexable)[key]
            ) {
                throw new Error(
                    'Read row is not corresponding to the description. ' +
                        'Missing some of the contact properties, or given type is not correct'
                );
            }
        });

        // const result = this.validateProperties.reduce(function (a, b) {
        //     return a && b in (row as Object);
        // }, true);

        // if (!result) {
        //     throw new Error(
        //         'Read row is not corresponding to the description. Missing some of the contact properties'
        //     );
        // }
    }
}
