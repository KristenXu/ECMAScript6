var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./es6/main.js",
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|cur|tiff)$/,
                loader: 'file'
            }, {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.(css|scss)$/,
                loaders: [
                    'style',
                    'css?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:10]',
                    'postcss',
                    'sass'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.scss']
    },
    postcss: [
        require('autoprefixer')({ browsers: ['last 3 versions'] })
    ],
    devtool: 'eval',
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        progress: true,
        compress: true,
        inline: false,
        port: 8084,
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './development/index.html',
            inject: 'body',
            minify: false,
            favicon: './favicon.ico'
        })
    ]
}