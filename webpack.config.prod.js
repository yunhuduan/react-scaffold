var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var projectRootDir = path.resolve(__dirname);
module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        app:'./src/app.js'
    },
    output: {
        path: path.join(projectRootDir, 'dist'),
        filename: '[name]-[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: projectRootDir,
            verbose: true,
            dry: false,
            exclude: []
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'

        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('common-[hash].js')
    ],
    module: {
        loaders: [
            {test: /\.js$/,loaders: ['babel'],include: path.join(__dirname, 'src')},
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
        extensions: ['', '.js']
    }
};