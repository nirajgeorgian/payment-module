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
var errors_1 = require("./errors");
exports.PaymentError = errors_1.default;
var AbstractPayment = /** @class */ (function () {
    function AbstractPayment(paymentData) {
        var _this = this;
        this.getPaymentData = function () {
            return _this.paymentData;
        };
        this.paymentData = paymentData;
    }
    return AbstractPayment;
}());
var Payment = /** @class */ (function (_super) {
    __extends(Payment, _super);
    function Payment(paymentdata) {
        var _this = _super.call(this, paymentdata) || this;
        _this.create = function () {
            return false;
        };
        _this.authorize = function () {
            return false;
        };
        _this.paymentInfo = function () {
            return _this.getPaymentData();
        };
        _this.capture = function (amount) {
            /**
             * For example if 1000$ is the authorization, and the current order in context is for 200$
             * you only capture 200$ from the available authorization of 1000$
             */
            if (amount) {
                return false;
            }
            return false;
        };
        _this.refund = function () {
            return false;
        };
        return _this;
    }
    return Payment;
}(AbstractPayment));
exports.Payment = Payment;
exports.default = Payment;
