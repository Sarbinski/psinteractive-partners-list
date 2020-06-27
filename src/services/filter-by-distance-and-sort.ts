import { ISortAndFilter } from '../pakt/sort-and-filter';
import { GeoDistance } from './geo-distance';
import { PartnerObject } from '../models/partner-object';
import { IGeoPoint } from '../pakt/geo-point';

export class FilterByDistanceAndSort implements ISortAndFilter {
    private maxDistance: number;

    constructor(maxDistance: number) {
        this.maxDistance = maxDistance;
    }

    sort(partners: PartnerObject[], direction: string = 'asc'): PartnerObject[] {
        return partners.sort((i, j) =>
            direction === 'asc' ? (i.getId() > j.getId() ? 1 : -1) : i.getId() < j.getId() ? 1 : -1
        );
    }

    filter(partners: PartnerObject[], startPoint: IGeoPoint): PartnerObject[] {
        return partners.filter((element) => {
            const distance = GeoDistance.distance3D(startPoint, element);
            return Math.round(distance * 100) / 100 <= this.maxDistance;
        });
    }
}
