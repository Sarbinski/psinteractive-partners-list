import { FileDataProvider } from '../src/services/file-data-provider';

describe('Reading from file', () => {
    test('FileDataProvider should fail when wrong filename or file without permissions is tried to be opened', () => {
        const mockExit = jest.spyOn(process, 'exit').mockImplementation();

        const destinationPath: string = '../data/nonexists.json';
        const fileProvider = new FileDataProvider();
        fileProvider.read(destinationPath);

        expect(mockExit).toHaveBeenCalledWith(1);
    });
});
