import { IGeoPoint } from '../pakt/geo-point';

export class GeoDistance {
    /**
     *  Pi/180 - Degree to radians ratio
     */
    static readonly D2R = 0.0174532925199433;
    /**
     *  Earth radius in kilometers
     */
    static readonly ERADIUS = 6371;

    /**
     * Returns distance between pointOne and pointTwo in kilometers
     */
    public static distance3D(pointOne: IGeoPoint, pointTwo: IGeoPoint): number {
        const lat1 = pointOne.getLat();
        const lat2 = pointTwo.getLat();

        const long1 = pointOne.getLng();
        const long2 = pointTwo.getLng();

        const dlong = (long2 - long1) * GeoDistance.D2R;
        const dlat = (lat2 - lat1) * GeoDistance.D2R;
        const a =
            Math.pow(Math.sin(dlat / 2.0), 2) +
            Math.cos(lat1 * GeoDistance.D2R) *
                Math.cos(lat2 * GeoDistance.D2R) *
                Math.pow(Math.sin(dlong / 2.0), 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = GeoDistance.ERADIUS * c;

        return d;
    }
}
