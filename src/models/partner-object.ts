import { IGeoPoint } from '../pakt/geo-point';

export class PartnerObject implements IGeoPoint {
    private lng: number;
    private lat: number;
    private name: string;
    private partnerId: number;

    constructor(name: string, id: number, latitude: number, longitude: number) {
        this.name = name;
        this.partnerId = id;
        this.lat = latitude;
        this.lng = longitude;
    }

    getName(): string {
        return this.name;
    }

    getId(): number {
        return this.partnerId;
    }

    getLat(): number {
        return this.lat;
    }

    getLng(): number {
        return this.lng;
    }
}
