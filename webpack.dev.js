const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 
module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        clean: true 
    },
    plugins: [ new MiniCssExtractPlugin() ]
})