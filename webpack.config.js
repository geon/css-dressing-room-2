module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: "./src/index.tsx",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	node: {
		fs: "empty"
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		loaders: [
			{ test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/, include: __dirname+'/src'},
		]
	},
	devServer: {
		contentBase: [
			__dirname + "/src/static",
		],
		host: "localhost",
		port: 3000,
		stats: {
		  assets: false,
		  hash: false,
		  chunks: false,
		  errors: true,
		  errorDetails: true,
		},
		overlay: true
	}
};
