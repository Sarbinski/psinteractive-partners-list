import { ValidateData } from './services/validate-data';
import { FileDataProvider } from './services/file-data-provider';
import { GetContactsList } from './services/get-contacts-list';
import { IIndexable } from './pakt/types/indexable-object';
import { FilterByDistanceAndSort } from './services/filter-by-distance-and-sort';
import { GeoObject } from './models/geo-object';
import { PrintPartnersInConsole } from './services/print-partners-in-console';

const destinationPath: string = './data/contacts.json';
const sofiaLat: number = 42.6665921;
const sofiaLng: number = 23.351723;
const maxDistanceFromSofia: number = 100;

const validatePropertiesAndType: IIndexable = {
    latitude: 'string',
    longitude: 'string',
    partner_id: 'number',
    name: 'string',
};

const sofiaGeo = new GeoObject(sofiaLat, sofiaLng);
const fileProvider = new FileDataProvider();
const filterService = new FilterByDistanceAndSort(maxDistanceFromSofia);
const dataValidator = new ValidateData(validatePropertiesAndType);

const dataFetch = new GetContactsList(fileProvider, dataValidator, filterService);

dataFetch.readData(destinationPath);
dataFetch.validateData();
dataFetch.filterAndSort(sofiaGeo);
const printService = new PrintPartnersInConsole(dataFetch.getPartnersList());
printService.print();
