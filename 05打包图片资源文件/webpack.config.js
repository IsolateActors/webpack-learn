const path = require('path');
//安装依赖 cnpm install html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
//console.log(path.resolve(__dirname, 'dist'))

module.exports = {
    //入口文件
    entry: './src/index.js',
    output: {
        //输出名称
        filename: "bundle.js",
        // 输出绝对路劲
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
    },
    //开发模式 生产：production
    mode: 'development',

    //loader配置
    module: {
        //对某种格式文件进行转换处理
        rules: [
            {
                test: /\.css$/,
                use: [
                    //use数组中的loader的顺序，是从下到上
                    //将js的样式内容插入到style标签
                    'style-loader',
                    //将css文件转为js
                    'css-loader'
                ]
            },
            {
                //匹配图片文件
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                //图片小于8kb。base64处理，减少请求数量，体积变大
                options: {
                    limit: 8192,
                    //url-loader的es6模块化解析
                    esModule: false,
                    //[hash:10]取图片的哈希前10位
                    //[ext]取图片的扩展名
                    name: '[hash:10].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    //插件配置
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}