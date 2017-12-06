module.exports = {
	// @note: Nous affichons les logs complets de test:
	verbose: true,

	// @note: La configuration suivant permet de spécifier à Jest de se
	// lancer dans tous les sous-dossiers du dossier ./packages:
	// @warning: Il faut bien faire attention de mettre en dépendances
	// babel-jest (mais aussi babel-core ainsi que regenerator-runtime)
	// dans chaque sous-dossier utilisant babel comme transpilateur
	// cf. https://facebook.github.io/jest/docs/en/getting-started.html#using-babel:
	projects: ["<rootDir>/packages/*"],

	// @note: configurations de la couverture de test:
	collectCoverage: true,
	coverageDirectory: "./coverage",
	collectCoverageFrom: [
		"**/*.{js,jsx}",
		"!**/index.{js,jsx}",
		"!**/node_modules/**",
		"!**/doc/**",
		"!**/dist/**",
		"!**/*.config.js",
		"!**/*.setup.js"
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80
		}
	}
};
