import { IValidator } from '../pakt/validator';
import { IIndexable } from '../pakt/types/indexable-object';

export class ValidateData implements IValidator {
    private validatePropertiesAndType: IIndexable = [];

    constructor(validatePropertiesAndType: IIndexable) {
        this.validatePropertiesAndType = validatePropertiesAndType;
    }

    validate(data: any): boolean {
        if (!Array.isArray(data)) {
            throw new Error('Read data should be an Array.');
        }
        if (!(data as any[]).length) {
            throw new Error('The read data is empty.');
        }

        data.forEach((element) => {
            this.validateRow(element);
        });

        return true;
    }

    private validateRow(row: any) {
        if (typeof row !== 'object' || row === null) {
            throw new Error(
                'Read row is not corresponding to the description. The row is now an Object'
            );
        }

        Object.keys(row as object).forEach((key) => {
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
    }
}
