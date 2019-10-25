import { Greeter } from '../index'

test('my greeting', () => {
	expect(Greeter('dodo')).toBe('Hello dodo')
})
