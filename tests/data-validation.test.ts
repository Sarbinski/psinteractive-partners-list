import { FileDataProvider } from '../src/services/file-data-provider';
import { ValidateData } from '../src/services/validate-data';
import { IIndexable } from '../src/pakt/types/indexable-object';

describe('Validation of the data read from file', () => {
    test('Validation should fail when empty file is read', () => {
        const destinationPath: string = './tests/fixtures/empty-file.json';
        const validatePropertiesAndType: IIndexable = {};

        const t = readAndValidateFileData(destinationPath, validatePropertiesAndType);

        expect(t).toThrowError('The read data is empty.');
    });

    test('Validation should fail when read row is not an Object', () => {
        const destinationPath: string = './tests/fixtures/not-object-row.txt';
        const validatePropertiesAndType: IIndexable = {
            latitude: 'number',
            longitude: 'number',
            partner_id: 'number',
            name: 'string',
        };

        const t = readAndValidateFileData(destinationPath, validatePropertiesAndType);

        expect(t).toThrowError('Read row is not corresponding to the description. The row is not an Object');
    });

    test('Validation should fail when types in JSON are wrong', () => {
        const destinationPath: string = './tests/fixtures/wrong-types.json';
        const validatePropertiesAndType: IIndexable = {
            latitude: 'object',
            longitude: 'number',
            partner_id: 'number',
            name: 'string',
        };

        const t = readAndValidateFileData(destinationPath, validatePropertiesAndType);

        expect(t).toThrowError(
            'Read row is not corresponding to the description. Some of the given type/s is not correct'
        );
    });

    test('Validation should fail when some key in JSON is missing', () => {
        const destinationPath: string = './tests/fixtures/wrong-types.json';
        const validatePropertiesAndType: IIndexable = {
            longitude: 'number',
            partner_id: 'number',
            partnerName: 'string',
        };

        const t = readAndValidateFileData(destinationPath, validatePropertiesAndType);

        expect(t).toThrowError(
            'Read row is not corresponding to the description. Missing some of the partner properties'
        );
    });
});

function readAndValidateFileData(
    filaPath: string,
    validatePropertiesAndType: IIndexable
): () => void {
    const fileProvider = new FileDataProvider();
    const dataValidator = new ValidateData(validatePropertiesAndType);
    return () => {
        fileProvider.read(filaPath);
        dataValidator.validate(fileProvider.getData());
    };
}
