module.exports = {
	projects: ["packages/xspeedit-core", "packages/xspeedit-widget", "packages/xspeedit-node"],
	collectCoverage: true,
	coverageDirectory: "./coverage",
	collectCoverageFrom: [
		"**/*.{js,jsx}",
		"!**/index.{js,jsx}",
		"!**/node_modules/**",
		"!**/dist/**",
		"!**/*.config.js",
		"!**/*.setup.js"
	]
};
