module.exports = {
	env: { browser: true, es2020: true },
	extends: ["plugin:tailwindcss/recommended", "plugin:cadence/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	plugins: ["cadence"],
	rules: {
		"@typescript-eslint/no-unsafe-assignment": "warn",
		"tailwindcss/no-custom-classname": "off"
	}
};
