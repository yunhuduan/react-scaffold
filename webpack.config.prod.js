var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [

    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [

    ],
    module: {
        loaders: [
            {test: /\.js$/,loaders: ['babel'],include: path.join(__dirname, 'src'),exclude: /node_modules/},
            {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
            {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]'},
            {test: /\.ico$/, loader: 'file?name=[name].[ext]'},
            {test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']}

        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};