const path = require('path');

module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  config.resolve.alias = {
    '~': path.resolve(__dirname, '../src'),
  };

  // Remove the existing css rule
  config.module.rules = config.module.rules.filter(
    f => f.test.toString() !== '/\\.css$/',
  );

  // Reapply css loaders
  config.module.rules.push({
    test: /\.css$/,
    loaders: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: path.resolve(__dirname, '../postcss.config.js'),
          },
          sourceMap: true,
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  console.log('config', config.module.rules)

  // Return the altered config
  return config;
};
