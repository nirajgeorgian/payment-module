declare class CreditcardError extends Error {
    code: number;
    constructor(message: string);
}
export declare class InvalidCreditCard extends CreditcardError {
    constructor(cardType: string);
}
export declare class UnacceptedCreditCard extends CreditcardError {
    constructor(cardType: string);
}
export declare class ExpiredCreditCard extends CreditcardError {
    constructor(cardNumber: number, expiryMonth: number, expiryYear: number);
}
export {};
