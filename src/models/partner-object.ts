import { IGeoPoint } from '../pakt/geo-point';

export class PartnerObject implements IGeoPoint {
    private lng: number;
    private lat: number;
    private name: string;
    private partner_id: number;

    constructor(name: string, id: number, latitude: number, longitude: number) {
        this.name = name;
        this.partner_id = id;
        this.lat = latitude;
        this.lng = longitude;
    }

    getName(): string {
        return this.name;
    }

    getId(): number {
        return this.partner_id;
    }

    getLat(): number {
        return this.lat;
    }

    getLng(): number {
        return this.lng;
    }
}
