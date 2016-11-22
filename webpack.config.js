const path = require('path');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, './example/src/app.js')],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './example/public'),
    filename: '[name].js',
    publicPath: 'http://localhost:7700/',
  },
  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
      },
    ],
  },
  plugins: [],
};
