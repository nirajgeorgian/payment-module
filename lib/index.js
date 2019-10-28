"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("errors/index");
exports.PaymentError = index_1.default;
class AbstractPayment {
    constructor(paymentData) {
        this.getPaymentData = () => {
            return this.paymentData;
        };
        this.paymentData = paymentData;
    }
}
class Payment extends AbstractPayment {
    constructor(paymentdata) {
        super(paymentdata);
        this.create = () => {
            return false;
        };
        this.authorize = () => {
            return false;
        };
        this.paymentInfo = () => {
            return this.getPaymentData();
        };
        this.capture = (amount) => {
            /**
             * For example if 1000$ is the authorization, and the current order in context is for 200$
             * you only capture 200$ from the available authorization of 1000$
             */
            if (amount) {
                return false;
            }
            return false;
        };
        this.refund = () => {
            return false;
        };
    }
}
exports.Payment = Payment;
exports.default = Payment;
