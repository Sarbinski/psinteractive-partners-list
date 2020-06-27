import { DataProvider } from '../pakt/data-provider';
import { ValidateData } from './validate-data';
import { FilterByDistanceAndSort } from './filter-by-distance-and-sort';
import { PartnerObject } from '../models/partner-object';
import { IGeoPoint } from '../pakt/geo-point';

export class GetContactsList {
    private dataProvider: DataProvider;
    private dataValidator: ValidateData;
    private sortService: FilterByDistanceAndSort;
    private partners: PartnerObject[] = [];
    private dataFromProvider: any;

    constructor(
        dataProvider: DataProvider,
        dataValidator: ValidateData,
        sortService: FilterByDistanceAndSort
    ) {
        this.dataProvider = dataProvider;
        this.dataValidator = dataValidator;
        this.sortService = sortService;
    }

    readData(options: any) {
        this.dataProvider.read(options);
        this.dataFromProvider = this.dataProvider.getData();
    }

    validateData(): void {
        let result = this.dataValidator.validate(this.dataFromProvider);
        // @TODO handle validation not pass ....
        this.dataFromProvider.forEach((partner: any) => {
            this.partners.push(
                new PartnerObject(partner.name, partner.partner_id, partner.latitude, partner.longitude)
            );
        });
    }

    filterAndSort(startPoint: IGeoPoint): void {
        this.partners = this.sortService.filter(this.partners, startPoint);
        this.partners = this.sortService.sort(this.partners, 'asc');
    }

    getPartnersList(): PartnerObject[] {
        return this.partners;
    }
}
