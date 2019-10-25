// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	transform: {
		'^.+\\.(t|j)sx?$': 'ts-jest'
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	coverageDirectory: 'coverage',

	moduleDirectories: [
		'node_modules',
		'src/utils', // a utility folder
		__dirname // the root directory
	],
	testEnvironment: 'node'
}
