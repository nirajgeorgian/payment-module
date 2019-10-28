declare class CreditcardError extends Error {
    code: number;
    constructor(message: string);
}
declare class InvalidCreditCard extends CreditcardError {
    constructor(cardType: string);
}
declare class UnacceptedCreditCard extends CreditcardError {
    constructor(cardType: string);
}
declare class ExpiredCreditCard extends CreditcardError {
    constructor(cardNumber: number, expiryMonth: number, expiryYear: number);
}
declare const _default: {
    InvalidCreditCard: typeof InvalidCreditCard;
    UnacceptedCreditCard: typeof UnacceptedCreditCard;
    ExpiredCreditCard: typeof ExpiredCreditCard;
};
export default _default;
