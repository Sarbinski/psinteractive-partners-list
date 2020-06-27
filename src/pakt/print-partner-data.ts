import { PartnerObject } from '../models/partner-object';

export abstract class PrintPartnerData {
    protected partners: PartnerObject[];
    constructor(partners: PartnerObject[]) {
        this.partners = partners;
    }

    abstract print(): any | void;
}
