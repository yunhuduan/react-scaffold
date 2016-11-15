var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var projectRootDir = path.resolve(__dirname);
module.exports = {
    devtool: 'source-map',
    entry: {
        app:'./src/app.js'
    },
    output: {
        path: path.join(projectRootDir, 'dist'),
        filename: '[name]-[hash].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production'),
                BABEL_ENV: JSON.stringify('production')
            }
        }),
        new CleanWebpackPlugin([
            'dist'
        ], {
            "root":projectRootDir,
            // 一个根的绝对路径.
            "verbose": true,
            // 将log写到 console.
            "dry": false,
            // 不要删除任何东西，主要用于测试.
            "exclude": []
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject:true,
            title:'test for react'
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin('common-[hash].js'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        })

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