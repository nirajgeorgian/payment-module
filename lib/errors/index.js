"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreditcardError extends Error {
    constructor(message) {
        super(message);
        this.code = 400; // Invalid argument error
    }
}
class InvalidCreditCard extends CreditcardError {
    constructor(cardType) {
        super(`card info is invalid for ${cardType} type.`);
    }
}
class UnacceptedCreditCard extends CreditcardError {
    constructor(cardType) {
        super(`Sorry, we cannot process ${cardType} credit cards.`);
    }
}
class ExpiredCreditCard extends CreditcardError {
    constructor(cardNumber, expiryMonth, expiryYear) {
        super(`Your credit card (ending ${cardNumber.toString().substr(-4)}) expired on ${expiryMonth}/${expiryYear}`);
    }
}
exports.default = {
    InvalidCreditCard,
    UnacceptedCreditCard,
    ExpiredCreditCard
};
