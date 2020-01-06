const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
    modules: ['node_modules'],
    extensions: ['.js', '.css'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
