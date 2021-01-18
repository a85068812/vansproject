/*
 * @Description: 
 * @Version: 1.0.0
 * @Author: 张泽锋
 * @LastEditors: sueRimn
 * @Date: 2020-07-04 11:19:07
 */
const path = require('path')
// const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
// const AutoDllPlugin = require("autodll-webpack-plugin");

const resolve = dir => {
    return path.join(__dirname, dir)
}
/**
 * @description 设置对应的服务器访问路径
 * @param {String} 一般部署为根路径 默认./  如果为二级子文件  则/文件名称/
 */
const publicPath = process.env.NODE_ENV === 'production' ?
    '' :
    './'

module.exports = {
    publicPath: publicPath,

    lintOnSave: process.env.NODE_ENV !== 'production',
    outputDir: process.env.outputDir, //打包生成路径
    chainWebpack: config => {
        // config.entry('main').add('babel-polyfill'),
            config.resolve.alias
                .set('@', resolve('src'))
                .set('@components', resolve('src/components'))
                .set('@assets', resolve('src/assets'))
                .set('@css', resolve('src/assets/css'))
                .set('@images', resolve('src/assets/images'))
                .set('@img', resolve('src/assets'))
                .set('@views', resolve('src/views'))
    },
    transpileDependencies: [
        "element-ui",
        "vue-awesome-swiper",
        "url-search-params-polyfill"
    ],
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        port: 9000,
        disableHostCheck: true,
        open: true,
        proxy: {
            '/api': {
                target: 'https://localhost:8080', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    productionSourceMap: false,
}