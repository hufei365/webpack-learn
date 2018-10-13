const webpack = require('webpack');
const path = require('path');
const object = require('lodash/fp/object');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let IS_DEV = /webpack-dev-server/.test(process.argv[1]);
// IS_DEV = true;


const config = require( IS_DEV ? './config/dev.config.js' : './config/pro.config.js');

// console.log(IS_DEV)

module.exports = object.assignIn({
    entry: {
        home: './src/views/home/home.js',
        blog: './src/views/blog/blog.js'
        ,about: './src/views/about/about.js'
        ,admin: './src/views/admin/admin.js'
    },
    output: {
        path: __dirname + './dist'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            }
            , {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
                }
            }
            , {
                test: /\.hbs$/,
                use: ['handlebars-loader']
            }
        ]
    }

}, config);