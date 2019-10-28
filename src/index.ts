export interface IRefundData {
	transactionId: string | number
	amount: number
}
export interface IPaymentData {
	creditCard?: {
		cardNumber: number
		expiryMonth: number
		expiryYear: number
	}
	mode: string
	paymentData: {
		token?: string
	}
}

abstract class AbstractPayment {
	private readonly paymentData: IPaymentData

	constructor(paymentData: IPaymentData) {
		this.paymentData = paymentData
	}

	getPaymentData = (): IPaymentData => {
		return this.paymentData
	}

	abstract create: () => boolean
	abstract authorize: () => boolean
	abstract paymentInfo: () => IPaymentData
	abstract capture: (amount: number) => boolean
	abstract refund: (data?: IRefundData) => boolean
}

export class Payment extends AbstractPayment {
	constructor(paymentdata: IPaymentData) {
		super(paymentdata)
	}

	create = (): boolean => {
		return false
	}

	authorize = (): boolean => {
		return false
	}

	paymentInfo = (): IPaymentData => {
		return this.getPaymentData()
	}

	capture = (amount: number): boolean => {
		//for each booking confirmation, capture the amount specified for the order from the charge
		/**
		 * For example if 1000$ is the authorization, and the current order in context is for 200$
		 * you only capture 200$ from the available authorization of 1000$
		 */
		if (amount) {
			return false
		}

		return false
	}

	refund = () => {
		return false
	}
}

export default Payment
