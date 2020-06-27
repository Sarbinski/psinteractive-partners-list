export interface ISortAndFilter {
    sort(sortable: any[], direction: string): any[];
    filter(...args: any): any[];
}
