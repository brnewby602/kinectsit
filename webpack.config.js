const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  eslint: {
    configFile: './.eslintrc',
  },
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/client/',
  },
  watch: true,
  module: {
    preLoaders: [
      {
        test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true,
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.es6'],
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.es6'],
  },
};
