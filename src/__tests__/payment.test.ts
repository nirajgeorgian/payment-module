import Payment, { IPaymentData } from '../index'

describe('payment-module should', () => {
	test('implement payment and check for data', () => {
		const paymentData: IPaymentData = {
			mode: 'stripe',
			paymentData: {
				token: 'stripe-dev-token123'
			}
		}
		const payment = new Payment(paymentData)

		expect(payment.authorize()).toBeFalsy()
		expect(payment.create()).toBeFalsy()
		expect(payment.capture(0)).toBeFalsy()
		expect(payment.refund()).toBeFalsy()
		expect(payment.paymentInfo()).toMatchObject(paymentData)
		expect(payment.paymentInfo()).toMatchSnapshot()
	})

	test('extends base Payment and work for payment module creation', () => {
		const paymentData: IPaymentData = {
			mode: 'stripe',
			paymentData: {
				token: 'stripe-dev-token123'
			}
		}

		class StripePayment extends Payment {
			constructor(paymentData: IPaymentData) {
				super(paymentData)
			}

			authorize = () => {
				const { token } = this.getPaymentData().paymentData
				if (token) {
					return true
				}
				return false
			}

			create = () => {
				const paymentData = this.getPaymentData()
				const mockCallback = jest.fn((token: string) => {
					if (token) {
						return {
							paid: true,
							transid: '12345'
						}
					}
					return {
						paid: false,
						transid: null
					}
				})
				const token = paymentData.paymentData.token ? paymentData.paymentData.token : ''
				const data = mockCallback(token)
				if (data.paid) {
					return true
				}
				return false
			}
		}
		const payment = new StripePayment(paymentData)

		expect(payment.paymentInfo()).toMatchSnapshot()
		expect(payment.paymentInfo()).toMatchObject(paymentData)
		expect(payment.authorize()).toBeTruthy()
		expect(payment.create()).toBeTruthy()
		expect(payment.refund()).toBeFalsy()
	})

	test('should refund data', () => {
		const paymentData: IPaymentData = {
			mode: 'stripe',
			paymentData: {
				token: 'stripe-dev-token123'
			}
		}

		class StripePayment extends Payment {
			constructor(paymentData: IPaymentData) {
				super(paymentData)
			}

			refund = () => {
				const { paymentData } = this.getPaymentData()
				const mockCallback = jest.fn((token: string) => {
					if (token) {
						return {
							refund: true,
							transid: '12345'
						}
					}
					return {
						refund: false,
						transid: null
					}
				})

				const token = paymentData.token ? paymentData.token : ''
				const data = mockCallback(token)
				if (data.refund) {
					return true
				}
				return false
			}
		}

		const payment = new StripePayment(paymentData)
		expect(payment.paymentInfo()).toMatchSnapshot()
		expect(payment.paymentInfo()).toMatchObject(paymentData)
		expect(payment.authorize()).toBeFalsy()
		expect(payment.create()).toBeFalsy()
		expect(payment.refund()).toBeTruthy()
	})
})
