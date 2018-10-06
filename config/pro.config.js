/**
 * 生产环境 打包配置文件
 */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const SERVER_BASE = path.resolve(__dirname, '../dist');
const VIEWS_BASE  = path.resolve(__dirname, '.././src/views/');

module.exports = {
    output: {
        filename: 'javascript/[name]_[hash:8].js',
        publicPath: 'http://127.0.0.1:3000/'
    },
    plugins: [

        new ExtractTextPlugin('css/[name]_[hash:8].css'),

        new HtmlWebpackPlugin({
            title: 'Home',
            filename: 'views/home.html',
            chunks: ['home'],
            template: 'html-withimg-loader!' + VIEWS_BASE + '/home/home.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Blog',
            filename: 'views/blog.html',
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
            filename: 'views/about.html',
            chunks: ['about'],
            template: 'html-withimg-loader!' + VIEWS_BASE + '/about/about.html'
        })
    ],
    mode: 'production'
}