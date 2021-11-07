const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context:path.resolve(__dirname, 'src') ,
    mode:'development',
entry: {
   main: './main.js'
} ,
output: {
filename:'bundle.js',
path: path.resolve(__dirname,'dist')
},
plugins: [
    new HTMLWebpackPlugin({
template:'./main.js'
    }),
    new CleanWebpackPlugin()
],
module:{
    rules:[
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
}
}