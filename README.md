# Application for filtering and sorting Partners from a list

This app uses predefined Geo point to filter the list of partners read from a file. Only the entries which are in the specified range will be in the invitation list. Also, the list is sorted by Partner ID.


## Start

This project uses TypeScript and npm for development.
In order to compile the TypeScript code to JS use the following command:
```
npm run build
```
To start the program run:
```
npm run start
```
For developing use the command below which will daemonize the process and auto-reload it if code is changed.
```
npm run start:dev
```

## Testing

In order to test, the project uses `jest` with TypeScript.
There is a single command to run the tests:
```
npm run test
```
This will build the code and start the tests.

To start the tests without invoking the build command use:
```
npm run test:execute
```

For starting the projec linter(`tslint`) use the command:
```
npm run lint
```
