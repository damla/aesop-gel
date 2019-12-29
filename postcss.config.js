module.exports = {
  plugins: [
    require('postcss-import')({ path: './src' }),
    require('postcss-extend-rule')(),
    require('postcss-mixins')(),
    require('postcss-rem')(),
    require('postcss-url')(),
    require('postcss-color-mod-function')(),
    require('postcss-for')(),
    require('postcss-nested')({ preserveEmpty: false }),
    require('postcss-simple-vars')(),
    require('postcss-preset-env')({ stage: 0, browsers: 'last 2 versions' }),
  ],
};
