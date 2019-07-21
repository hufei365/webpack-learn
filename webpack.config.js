const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            "@": path.resolve('/')
        }
    },
    entry: {
        main:'./src/app.js',
        // son: './src/components/son.vue',
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: "[name].chunk.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        port:'3000'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: "vue-loader"
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: path.join(__dirname, './src/index.html')
        })
    ],
    mode: 'development'
};