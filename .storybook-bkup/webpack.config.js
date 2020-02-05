const path = require('path');

webpackFinal: async (config,) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },

webpackFinal: async ({ config, { configType } }) => {
  // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  config.resolve.alias = {
    '~': path.resolve(__dirname, '../src'),
    '~.storybook': path.resolve(__dirname, './'),
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
          importLoaders: 1,
          modules: {
            mode: 'local',
            localIdentName: 'aesop-gel-[path][name]__[local]--[hash:base64:5]',
          },
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

  // Return the altered config
  return config;
},
