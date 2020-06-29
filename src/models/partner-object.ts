import { IGeoPoint } from '../pakt/geo-point';
import { IPartnerData } from '../pakt/types/partner-data';

export class PartnerObject implements IPartnerData {
    private name: string;
    private partnerId: number;
    private geoPoint: IGeoPoint;

    constructor(name: string, id: number, geoPoint: IGeoPoint) {
        this.name = name;
        this.partnerId = id;
        this.geoPoint = geoPoint;
    }

    getName(): string {
        return this.name;
    }

    getId(): number {
        return this.partnerId;
    }

    getGeoPoint(): IGeoPoint {
        return this.geoPoint;
    }
}
