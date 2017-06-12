var webpack = require('webpack');
var path = require('path');

function getAbsolutePath(filename) {
    return path.resolve(__dirname, filename);
}

module.exports = {
    entry: getAbsolutePath('src/index.js'),
    output: {
        path: getAbsolutePath('lib/'),
        filename: 'index.js',
        libraryTarget: 'commonjs'
    },
    module: {
        loaders: [{
            test: /\.js/,
            loader: 'babel-loader'
        }],
    }
};