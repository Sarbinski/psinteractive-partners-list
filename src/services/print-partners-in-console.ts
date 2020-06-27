import { PrintPartnerData } from '../pakt/print-partner-data';

export class PrintPartnersInConsole extends PrintPartnerData {
    print() {
        console.log('\x1b[44m%s\x1b[0m', 'Invited Partners:');
        this.partners.forEach((partner) =>
            console.log('\x1b[36m%s\x1b[0m', '-' + partner.getId() + '-', partner.getName())
        );
    }
}
