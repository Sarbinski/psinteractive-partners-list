export interface IValidator {
    validate(data: any): boolean;
    getErrors(): string[];
}
