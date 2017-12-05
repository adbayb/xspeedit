module.exports = {
	verbose: true,

	projects: ["packages/xspeedit-core", "packages/xspeedit-widget", "packages/xspeedit-node"],

	// @note: coverage configurations:
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
