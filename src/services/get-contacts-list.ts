import { DataProvider } from '../pakt/data-provider';
import { IGeoPoint } from '../pakt/geo-point';
import { IValidator } from '../pakt/validator';
import { ISortAndFilter } from '../pakt/sort-and-filter';
import { IPartnerData } from '../pakt/types/partner-data';
import { PartnerObject } from '../models/partner-object';
import { GeoObject } from '../models/geo-object';

export class GetContactsList {
    private dataProvider: DataProvider;
    private dataValidator: IValidator;
    private sortService: ISortAndFilter;
    private partners: IPartnerData[] = [];
    private dataFromProvider: any;

    constructor(
        dataProvider: DataProvider,
        dataValidator: IValidator,
        sortService: ISortAndFilter
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
        const result = this.dataValidator.validate(this.dataFromProvider);
        // @TODO handle validation not pass ....
        this.dataFromProvider.forEach((partner: any) => {
            this.partners.push(
                new PartnerObject(
                    partner.name,
                    partner.partner_id,
                    new GeoObject(partner.latitude, partner.longitude)
                )
            );
        });
    }

    filterAndSort(startPoint: IGeoPoint): void {
        this.partners = this.sortService.filter(this.partners, startPoint);
        this.partners = this.sortService.sort(this.partners, 'asc');
    }

    getPartnersList(): IPartnerData[] {
        return this.partners;
    }
}
