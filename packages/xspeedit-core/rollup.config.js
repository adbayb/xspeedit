import babel from "rollup-plugin-babel";
import babelMinify from "rollup-plugin-babel-minify";

export default {
	input: "src/index.js",
	output: {
		file: `dist/xspeedit-core.${process.env.BABEL_ENV}.js`,
		format: "cjs"
	},
	external: [],
	plugins: [
		babel({
			exclude: "node_modules/**",
			// @note: nous activons le plugin external-helpers seulement lorsque nous utilisons rollup
			// pour éviter l'erreur "babelHelpers ReferenceError" lorsque les cas de tests sont exécutés:
			plugins: ["external-helpers"]
		}),
		babelMinify({
			comments: false
		})
	]
};
