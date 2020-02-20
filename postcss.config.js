module.exports = {
  plugins: [
    require('postcss-import')({ path: './src' }),
    require('postcss-extend-rule')(),
    require('postcss-mixins')(),
    require('postcss-rem')({
      baseline: 16,
      convert: 'px',
      fallback: false,
      precision: 5,
    }),
    require('postcss-url')(),
    require('postcss-color-mod-function')(),
    require('postcss-for')(),
    require('postcss-nested')({ preserveEmpty: false }),
    require('postcss-custom-properties')({
      preserve: false,
    }),
    require('postcss-preset-env')({ stage: 0, browsers: 'last 2 versions' }),
  ],
};
