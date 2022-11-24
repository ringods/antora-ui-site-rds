var path = require("path");

// START `storybook-tailwind-foundations`
// const { VueLoaderPlugin } = require('vue-loader')
// const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js'); // or your own config file
// require('storybook-tailwind-foundations/initialize.js')
// 	.default(tailwindConfigPath);
// END

module.exports = {
	"stories": [
		"../src/**/*.stories.mdx",
		// "../node_modules/storybook-tailwind-foundations/**/*.stories.js",
		"../src/**/*.stories.@(js|jsx|ts|tsx)",
	],
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	"framework": "@storybook/html",
	"core": {
		"builder": "@storybook/builder-webpack5"
	},
	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Rather than React, use plain Handlebars files as templates
		config.module.rules.push({
			test: /\.hbs$/,
			use: [
				{
					loader: 'handlebars-loader',
					options: {
						partialDirs: [path.join(__dirname, "..", "src", "partials")],
						helperDirs: [path.join(__dirname, "..", "src", "helpers")],
					}
				}
			]
		});

		// Process the TailwindCSS setup also within Storybook
		config.module.rules.push({
			test: /\.css$/,
			use: [
				"postcss-loader"
			]
		});


		// START `storybook-tailwind-foundations`
		// using `unshift` because this one needs to be at the start of the array
		// source: https://github.com/vuejs/vue-loader/issues/1826#issuecomment-851316548
		// config.module.rules.unshift({
		// 	test: /\.vue$/,
		// 	use: [
		// 		{
		// 			loader: 'vue-loader',
		// 			options: {}
		// 		}
		// 	]
		// });
		// config.plugins.push(new VueLoaderPlugin());
		// END


		// Return the altered config
		return config;
	}
}
