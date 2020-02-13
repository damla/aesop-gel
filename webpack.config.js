const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['./src/index.js'],
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: 'commonjs' }],
              '@babel/preset-react',
            ],
            plugins: [
              [
                'module-resolver',
                {
                  root: ['./src'],
                },
              ],
            ],
          },
        },
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
              modules: {
                mode: 'local',
                localIdentName:
                  'aesop-gel-[path][name]__[local]--[hash:base64:5]',
                hashPrefix: 'aesop-gel',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '~.storybook': path.resolve(__dirname, '.storybook'),
    },
    modules: ['node_modules'],
    extensions: ['*', '.js', '.jsx', '.css'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: `${__dirname}/dist`,
    hot: true,
  },
};
