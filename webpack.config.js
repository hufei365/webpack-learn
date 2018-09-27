const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    entry:{
        home: './src/views/home/home.js',
        blog: './src/views/blog/blog.js'
    },

    output: {
        filename: '[name]_[hash:8].js',
        path: __dirname + '/dist'
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
            ,{
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
                 }
           }
            ,{
                test: /\.hbs$/,
                use: ['handlebars-loader']
            }
        ]
    }, 

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'home.html',
            chunks:['home'],
            template: 'html-withimg-loader!'+path.resolve(__dirname , './src/views/home/home.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            chunks:['blog'],
            template: 'html-withimg-loader!'+path.resolve(__dirname , './src/views/blog/blog.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            chunks:['about'],
            template: 'html-withimg-loader!'+path.resolve(__dirname , './src/views/about/about.html')
        })
    ],

    devServer:{
        contentBase: './dist'
        ,port: 8080
    },
    devtool: 'source-map'
}

function deepCopy(){
    
}