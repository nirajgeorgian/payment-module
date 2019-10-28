# payment-integration base module
> this can be used as a base package which provide abstract method for your payment system and different payment modules can be build on top of this.

## Installation
```bash
# npm package manager
npm install payment-module --save
# yarn package manager
yarn add payment-module
```

## Usuage
```javascript
import Payment from 'payment-module'

const paymentData = {
	mode: 'stripe',
	paymentData: {
		token: 'stripe-dev-token123'
	},
}

class StripePayment extends Payment {
	constructor(paymentData) {
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
					"transid": "12345"
				}
			}
			return {
				paid: false,
				"transid": null
			}
		})
		const token = paymentData.paymentData.token ? paymentData.paymentData.token : ''
		const data = mockCallback(token);
		if (data.paid) {
			return true;
		}
		return false
	}
}

// replace jest.fn mock with actual payment api module payment
const payment = new StripePayment(paymentData)
```
