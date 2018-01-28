/*
Configuration for the webpack to bundle the source code
*/

const path  = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
	entry: ['./src/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{
        enforce: "pre",
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
			{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
			},
			{
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
			},
			{
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
			}
    ]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new StyleLintPlugin(),
		new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
		})
	]
}]