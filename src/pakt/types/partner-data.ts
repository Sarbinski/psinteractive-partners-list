import { IGeoPoint } from '../geo-point';

export interface IPartnerData {
    getName(): string;
    getId(): number;
    getGeoPoint(): IGeoPoint;
}
