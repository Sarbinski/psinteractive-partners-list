import { ISortAndFilter } from '../pakt/sort-and-filter';
import { GeoDistance } from './geo-distance';
import { IGeoPoint } from '../pakt/geo-point';
import { IPartnerData } from '../pakt/types/partner-data';

export class FilterByDistanceAndSort implements ISortAndFilter {
    private maxDistance: number;

    constructor(maxDistance: number) {
        this.maxDistance = maxDistance;
    }

    sort(partners: IPartnerData[], direction: string = 'asc'): IPartnerData[] {
        return partners.sort((i, j) =>
            direction === 'asc' ? (i.getId() > j.getId() ? 1 : -1) : i.getId() < j.getId() ? 1 : -1
        );
    }

    filter(partners: IPartnerData[], startPoint: IGeoPoint): IPartnerData[] {
        return partners.filter((element) => {
            const distance = GeoDistance.distance3D(startPoint, element.getGeoPoint());
            return Math.round(distance * 100) / 100 <= this.maxDistance;
        });
    }
}
