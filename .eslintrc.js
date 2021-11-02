module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"plugin:react/recommended",
		"airbnb", "airbnb/hooks"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 11,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"linebreak-style": ["error", "windows"],
		"react/jsx-filename-extension": [1, { "allow": "as-needed" }],
		"import/extensions": ["jsx", {
			"jsx": "never" | "always" | "ignorePackages"
		}]
	}
}
