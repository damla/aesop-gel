const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const path = require('path');

module.exports = (on, config) => {
  const opts = webpackPreprocessor.defaultOptions;
  const rules = opts.webpackOptions.module.rules;
  const babelLoader = rules[0].use[0];

  // add React preset to be able to transpile JSX
  babelLoader.options.presets.push(require.resolve('@babel/preset-react'));

  if (!babelLoader.options.plugins) {
    babelLoader.options.plugins = [];
  }

  // to allow aliased imports
  babelLoader.options.plugins.push([
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        '~': './src',
      },
    },
  ]);

  // handle postCss
  rules.push(
    {
      test: /\.css$/,
      loaders: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              mode: 'local',
              localIdentName:
                'aesop-gel-[path][name]__[local]--[hash:base64:5]',
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.resolve(__dirname, '../../postcss.config.js'),
            },
            sourceMap: true,
          },
        },
      ],
      include: path.resolve(__dirname, '../../'),
    },
    {
      test: /\.svg$/,
      loader: ['svg-inline-loader'],
    },
  );

  // We can also push Babel istanbul plugin to instrument the code on the fly
  // and get code coverage reports from component tests (optional)
  babelLoader.options.plugins.push(require.resolve('babel-plugin-istanbul'));

  // in order to mock named imports, need to include a plugin
  babelLoader.options.plugins.push([
    require.resolve('@babel/plugin-transform-modules-commonjs'),
    {
      loose: true,
    },
  ]);

  // add code coverage plugin
  require('@cypress/code-coverage/task')(on, config);

  on('file:preprocessor', webpackPreprocessor(opts));

  // if adding code coverage, important to return updated config
  return config;
};
