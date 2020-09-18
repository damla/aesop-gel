module.exports = {
  presets: [['@babel/preset-env'], '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-classes',
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],
  ],
  // env: {
  //   test: {
  //     plugins: [
  //       '@babel/plugin-transform-classes',
  //       '@babel/plugin-proposal-class-properties',
  //       [
  //         'module-resolver',
  //         {
  //           root: ['./src'],
  //           alias: {
  //             '~': './src',
  //           },
  //         },
  //       ],
  //     ],
  //   },
  // },
};
