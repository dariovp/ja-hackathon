module.exports = {
	env: {
		node: true,
		browser: false,
	},
	parserOptions: {
		ecmaVersion: 11,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		"react",
		"prettier"
	],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended"
	],
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/jsx-indent": ["warn", "tab"],
		"indent": ["warn", "tab"]
	}
};
