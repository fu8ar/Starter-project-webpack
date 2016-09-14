var CommonsChunckPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin.js'),
    webpack = require('webpack'),
    path = require("path");

module.exports = {

    entry: {
        main: './es6/main.js',
        vendor: ['jquery', 'bootstrap-loader']
    },
    output: {
        path: path.resolve(__dirname, "dist/siteFiles/js/"),
        publicPath: "/siteFiles/js/",
        filename: '[name].bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    module: {

        preLoaders: [

            // lints javscript for errors
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint'
            }
        ],

        loaders: [

            // allows latest es6 to run converted into valilla javascript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },

            // converts sass to css and loads into bundle.js
            {
			    test: /\.scss$/,
			    exclude: /node_modules/,
			    loader: 'style-loader!css-loader!sass-loader'
			},

            // loads all images into bundle.js
			{
			    test: /\.(jpg|png|gif)$/,
			    include: /images/,
			    loader: 'url'
			},

            // Bootstrap 3 - checks files using imports-loader and imports module using imports-loader
            { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }

        ],
    },
    plugins: [
        new CommonsChunckPlugin('vendor', 'vendor.bundle.js'),
        new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" })
    ],

    sassResources: './sass/config/resources.scss',

    // version to test (es6/ecmascript 2015)
    jshint: {
        esversion: 6
    }
};













