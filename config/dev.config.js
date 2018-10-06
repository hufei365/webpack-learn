/**
 * 开发环境 打包配置文件
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const SERVER_BASE = path.resolve(__dirname, '../dist');
const VIEWS_BASE  = path.resolve(__dirname, '.././src/views/');
module.exports = {
    output: {
        filename: 'static/javascript/[name].js',
    },
    plugins: [

        new ExtractTextPlugin('static/css/[name].css'),

        new HtmlWebpackPlugin({
            title: 'Home',
            filename: 'home.html',
            chunks: ['home'],
            template: 'html-withimg-loader!' + VIEWS_BASE + '/home/home.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Blog',
            filename: 'blog.html',
            chunks: ['blog'],
            template: 'html-withimg-loader!' + VIEWS_BASE + '/blog/blog.html'
        }),
        new HtmlWebpackPlugin({
            title: 'BlogDetail',
            filename: 'views/blog-detail.html',
            chunks: ['blog'],
            template: 'html-withimg-loader!' + VIEWS_BASE + '/blog/blog-detail.html'
        }),
        new HtmlWebpackPlugin({
            title: 'About me',
            filename: 'about.html',
            chunks: ['about'],
            template: 'html-withimg-loader!' + VIEWS_BASE + '/about/about.html'
        })
    ],
    devtool: 'source-map'
    , devServer: {
        contentBase: SERVER_BASE
        , port: 8080
    }
    , mode: 'development'
}