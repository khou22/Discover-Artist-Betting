let path = require('path');
let webpack = require('webpack');
let nodeExternals = require('webpack-node-externals');

let entries = {
    'dist/index': ['babel-polyfill', './server/src/index.ts'],
    // 'tests/test': ['babel-polyfill', './server/tests/src/tests.ts'],
};

module.exports = {
    entry: entries,
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './'),
        libraryTarget: 'commonjs',
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                // Linting
                enforce: 'pre',
                test: /\.(js|ts)$/,
                loader: 'eslint-loader',
                options: {
                    failOnWarning: false,
                    failOnError: false,
                    emitWarning: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{ loader: 'ts-loader' }],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['airbnb'],
                    },
                },
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules/'],
        extensions: ['.ts', '.js'],
    },
    stats: {
        colors: true, // Include colors in output
        errorDetails: true,
        timings: true,
    },
    node: {
        __dirname: true,
    },
};
