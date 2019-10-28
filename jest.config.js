module.exports = {
	clearMocks: true,
	preset: 'ts-jest',
	transform: {
		'^.+\\.(t|j)sx?$': 'ts-jest'
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	coverageDirectory: 'coverage',
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json',
			diagnostics: true
		}
	},
	moduleDirectories: [
		'node_modules',
		'src/utils', // a utility folder
		__dirname // the root directory
	],
	moduleNameMapper: {
		src: '<rootDir>/src'
	},
	testEnvironment: 'node'
}
