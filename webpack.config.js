

const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
    entry:{
        path:path.join(__dirname,'./src/main.js')
    },
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    mode: 'production',
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:"index.html"
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader', 'css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|jpeg|bmp)$/,loader:'url-loader?limit=115201'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,loader:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/(node_modules|bower_components)/},
            {test:/\.vue$/,loader:'vue-loader'}
        ]
    },
    resolve:{
        // alias:{
        //     "vue$":"vue/dist/vue.js"//方法二使用vue
        // }
    }
}