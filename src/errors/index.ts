class CreditcardError extends Error {
	code: number

	constructor(message: string) {
		super(message)
		this.code = 400 // Invalid argument error
	}
}

class InvalidCreditCard extends CreditcardError {
	constructor(cardType: string) {
		super(`card info is invalid for ${cardType} type.`)
	}
}

class UnacceptedCreditCard extends CreditcardError {
	constructor(cardType: string) {
		super(`Sorry, we cannot process ${cardType} credit cards.`)
	}
}

class ExpiredCreditCard extends CreditcardError {
	constructor(cardNumber: number, expiryMonth: number, expiryYear: number) {
		super(`Your credit card (ending ${cardNumber.toString().substr(-4)}) expired on ${expiryMonth}/${expiryYear}`)
	}
}

export default {
	InvalidCreditCard,
	UnacceptedCreditCard,
	ExpiredCreditCard
}
