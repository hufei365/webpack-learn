const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件

const ENTRY_BASE = path.resolve(__dirname, 'components/pages');

module.exports = {
	entry: {
		index: ENTRY_BASE + '/home/home.js',
		list: ENTRY_BASE + '/list.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'output'),
		publicPath: "http://127.0.0.1:8080/[hash]/"
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			// {
			// 	test: /\.(png|jpg|gif)$/i,
			// 	use: ['url-loader']
			// },
			{ test: /\.jpg$/, use: [ "file-loader" ] },
			{ test: /\.png$/, use: [ "url-loader?mimetype=image/png" ] },
			{
				test: /\.(html)$/,
				use: {
				  loader: 'html-loader',
				  options: {
					attrs: [':data-src']
				  }
				}
			  }
		]
	},

	//插件
	plugins:[
        // new HtmlWebpackPlugin({
        //     chunks:['index'],
        //     filename:'output/home.html',
        //     template:'views/home.html'  
        // })
     ]
};