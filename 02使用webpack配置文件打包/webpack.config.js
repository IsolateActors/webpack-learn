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
    mode: 'development'
}