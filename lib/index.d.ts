export interface IRefundData {
    transactionId: string | number;
    amount: number;
}
export interface IPaymentData {
    creditCard?: {
        cardNumber: number;
        expiryMonth: number;
        expiryYear: number;
    };
    mode: string;
    paymentData: {
        token?: 'String';
    };
}
declare abstract class AbstractPayment {
    private readonly paymentData;
    constructor(paymentData: IPaymentData);
    abstract create: () => boolean;
    abstract authorize: () => boolean;
    abstract paymentInfo: () => IPaymentData;
    abstract capture: () => boolean;
    abstract refund: (data?: IRefundData) => boolean;
}
export declare class Payment extends AbstractPayment {
    constructor(paymentdata: IPaymentData);
    create: () => boolean;
    authorize: () => boolean;
    paymentInfo: () => IPaymentData;
    capture: () => boolean;
    refund: () => boolean;
}
export default Payment;
