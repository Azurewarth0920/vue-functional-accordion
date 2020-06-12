import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { name, version, homepage, author } from './package.json'

export const banner = `/*!
 * ${name} v${version}
 * ${homepage}
 *
 * Copyright (c) 2020-present ${author}
 * Released under the MIT license
 * ${homepage}/blob/master/LICENSE
 */`

export default {
  input: './src/index.tsx',
  plugins: [
    commonjs(),
    typescript({
      jsx: 'preserve',
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      extensions: ['.ts', '.tsx'],
    }),
  ],
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es',
      banner,
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      banner,
    },
  ],
}
