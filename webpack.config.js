"use strict";

var webpack = require('webpack'),
    path = require('path'),
    sourcePath = path.join(__dirname, '/src/app'),
    outputPath = path.join(__dirname, '/dist');

var NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    context: sourcePath,
    entry: './index',
    output: {
        path: outputPath + '/js',
        filename: 'index.js',
        library: 'index'
    },

    watch: (NODE_ENV == 'development'),

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: (NODE_ENV == 'development') ? 'cheap-inline-module-source-map' : null,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],

    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [
                /node_modules/,
                /bower_components/
            ],
            loader: 'babel?optional[]=runtime'
        }, {
            test: /\.html$/,
            exclude: [
                /node_modules/,
                /bower_components/
            ],
            loader: 'ng-cache?prefix=[dir]/[dir]'
        }],

        noParse: [
            /angular\/angular.js/
        ]
    }


};