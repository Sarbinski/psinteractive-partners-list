import { IPartnerData } from './types/partner-data';

export abstract class PrintPartnerData {
    protected partners: IPartnerData[];
    constructor(partners: IPartnerData[]) {
        this.partners = partners;
    }

    abstract print(): any | void;
}
