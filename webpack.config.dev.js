var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var projectRootDir = path.resolve(__dirname);
module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './src/app.js'
    ],
    output: {
        path: path.join(projectRootDir, 'dist'),
        publicPath:'/dist/',
        filename: '[name]-[hash].js'
    },
    devServer:{
        inline:true,
        // Enable special support for Hot Module Replacement
        // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
        // Use "webpack/hot/dev-server" as additional module in your entry point
        // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.
        hot:true,
        // Set this if you want to enable gzip compression for assets
        compress: true,
        // Set this as true if you want to access dev server from arbitrary url.
        // This is handy if you are using a html5 router.
        historyApiFallback: false,
        // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
        // Use "**" to proxy all paths to the specified server.
        // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
        // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
        /*proxy: {
            "**": "http://localhost:9090"
        },*/
        // It's a required option.
        publicPath: '/dist/',
        contentBase:'',
        headers: { "X-Custom-Header": "yes" },//set headers
        stats: { colors: true },
       /* proxy: {
            '/api/!*': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                logLevel:'debug',
                pathRewrite: {'^/api' : ''}
            }
        }*/
        setup: function(app) {
            // Here you can access the Express app object and add your own custom middleware to it.
            // For example, to define custom handlers for some paths:
            // app.get('/some/path', function(req, res) {
            //   res.json({ custom: 'response' });
            // });
            app.get('/api/goods',function (req,res) {
                res.json([{id:1,name:'test1',price:12.5,remark:'testremark'+new Date().getTime()},{id:2,name:'test2',price:10.5,remark:'testremark22'+new Date().getTime()}]);
            });
            app.get('/api/users',function (req,res) {
                res.json([{id:1,name:'test1'},{id:2,name:'test2'}]);
            });
        },

    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('development'),
                BABEL_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject:true,
            title:'test for react'
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