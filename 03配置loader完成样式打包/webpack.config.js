const path = require('path');
console.log(path.resolve(__dirname, 'dist'))

module.exports = {
    //入口文件
    entry: './src/index.js',
    output: {
        //输出名称
        filename: "bundle.js",
        // 输出绝对路劲
        path: path.resolve(__dirname, 'dist')
    },
    //开发模式 生产：production
    mode: 'development',

    //loader配置
    module: {
        //对某种格式文件进行转换处理
        rules: [
            {
                test: /\.css$/,
                use: [//use数组中的loader的顺序，是从下到上
                    //将js的样式内容插入到style标签
                    'style-loader',
                    //将css文件转为js
                    'css-loader'
                ]
            }
        ]
    }
}