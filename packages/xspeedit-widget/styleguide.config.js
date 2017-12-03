module.exports = {
	components: "components/**/[A-Z]*.js",
	defaultExample: true,
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.js?$/,
					exclude: /node_modules/,
					loader: "babel-loader"
				}
			]
		}
	}
};
