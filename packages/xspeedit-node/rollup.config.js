import babel from "rollup-plugin-babel";
import babelMinify from "rollup-plugin-babel-minify";
import resolve from "rollup-plugin-node-resolve";

export default {
	input: "src/index.js",
	output: {
		file: `dist/app.js`,
		format: "cjs"
	},
	plugins: [
		// @note: resolve() autorise la résolution des "index.js", module, dans les imports/exports...:
		resolve(),
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
