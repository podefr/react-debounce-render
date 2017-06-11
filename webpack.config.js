var webpack = require('webpack');
var path = require('path');

function getAbsolutePath(filename) {
    return path.resolve(__dirname, filename);
}

const SRC_DIR = getAbsolutePath('src/index.js');
const LIB_DIR = getAbsolutePath('lib/');

var config = {
    entry: SRC_DIR,
    output: {
        path: LIB_DIR,
        filename: 'index.js'
    },
    module: {
        loaders: [{
            test: /\.js/,
            include: SRC_DIR,
            loader: 'babel-loader'
        }],
    }
};

module.exports = config;