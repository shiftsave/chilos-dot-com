const config = require('./webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const stylLoaderIndex = config.module.loaders.map(l => l.key).indexOf('styl');

config.module.loaders[stylLoaderIndex] = {
  test: /\.styl$/,
  loader: ExtractTextPlugin.extract('stylus', 'css-loader!stylus-loader'),
};

module.exports = config;
