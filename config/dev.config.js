/**
 * 开发环境 打包配置文件
 */

 module.exports = {
     devtool: 'source-map'
     ,devServer: {
         contentBase: path.resolve(__dirname , './dist')
         ,port: 8080
     }
     ,mode: 'development'
 }