export interface Field {
    name: string;
    toString?(value: any): string;
}