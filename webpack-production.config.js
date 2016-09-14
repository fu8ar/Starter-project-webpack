/*
    https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.amx9d9ow4
    https://www.npmjs.com/package/strip-loader
*/

var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
 test: [/\.js$/, /\.es6$/],
 exclude: /node_modules/,
 loader: WebpackStripLoader.loader('console.log')
}
devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;