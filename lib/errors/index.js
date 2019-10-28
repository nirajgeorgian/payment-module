"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CreditcardError = /** @class */ (function (_super) {
    __extends(CreditcardError, _super);
    function CreditcardError(message) {
        var _this = _super.call(this, message) || this;
        _this.code = 400; // Invalid argument error
        return _this;
    }
    return CreditcardError;
}(Error));
var InvalidCreditCard = /** @class */ (function (_super) {
    __extends(InvalidCreditCard, _super);
    function InvalidCreditCard(cardType) {
        return _super.call(this, "card info is invalid for " + cardType + " type.") || this;
    }
    return InvalidCreditCard;
}(CreditcardError));
var UnacceptedCreditCard = /** @class */ (function (_super) {
    __extends(UnacceptedCreditCard, _super);
    function UnacceptedCreditCard(cardType) {
        return _super.call(this, "Sorry, we cannot process " + cardType + " credit cards.") || this;
    }
    return UnacceptedCreditCard;
}(CreditcardError));
var ExpiredCreditCard = /** @class */ (function (_super) {
    __extends(ExpiredCreditCard, _super);
    function ExpiredCreditCard(cardNumber, expiryMonth, expiryYear) {
        return _super.call(this, "Your credit card (ending " + cardNumber.toString().substr(-4) + ") expired on " + expiryMonth + "/" + expiryYear) || this;
    }
    return ExpiredCreditCard;
}(CreditcardError));
exports.default = {
    InvalidCreditCard: InvalidCreditCard,
    UnacceptedCreditCard: UnacceptedCreditCard,
    ExpiredCreditCard: ExpiredCreditCard
};
