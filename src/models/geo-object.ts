import { IGeoPoint } from '../pakt/geo-point';

export class GeoObject implements IGeoPoint {
    private lng: number;
    private lat: number;

    constructor(latitude: number, longitude: number) {
        this.lat = latitude;
        this.lng = longitude;
    }

    getLat(): number {
        return this.lat;
    }

    getLng(): number {
        return this.lng;
    }
}
