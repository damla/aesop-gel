import alias from '@rollup/plugin-alias';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
import minify from 'rollup-plugin-babel-minify';
import path from 'path';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

import copy from 'rollup-plugin-copy-assets';

/** @TODO set up actual env vars */
const NODE_ENV = 'development';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: true,
  },
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    copy({
      assets: ['src/assets'],
    }),
    alias({
      entries: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
    }),
    postcss({
      modules: true,
      extract: 'dist/styles.css',
      sourceMap: NODE_ENV === 'development' ? true : false,
      minimize: NODE_ENV === 'development' ? false : true,
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    json(),
    commonjs(),
    resolve(),
    minify({}),
  ],
};
