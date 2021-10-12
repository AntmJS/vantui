/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve, join } = require('path')
const { getBabelOutputPlugin } = require('@rollup/plugin-babel')
const json = require('@rollup/plugin-json')
const image = require('@rollup/plugin-image')
const copy = require('rollup-plugin-copy')
const typescript = require('@rollup/plugin-typescript')
const commonjs = require('@rollup/plugin-commonjs')
const styles = require('rollup-plugin-styles')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const cwd = process.cwd()

const config = {
  input: join(cwd, 'src/index.ts'),
  output: [
    {
      file: join(cwd, 'dist/index.js'),
      format: 'cjs',
      sourcemap: true,
    },
    {
      sourcemap: true,
      format: 'esm',
      file: join(cwd, 'dist/index.esm.js'),
    },
  ],
  external: [
    '@babel/runtime-corejs3',
    '@tarojs/taro',
    '@tarojs/components',
    'react',
    'react-dom',
  ],
  plugins: [
    commonjs({
      include: /\/node_modules\//,
    }),
    nodeResolve({
      customResolveOptions: {
        moduleDirectories: ['node_modules'],
      },
    }),
    json(),
    typescript({
      tsconfig: resolve(__dirname, '../../tsconfig.json'),
      module: 'esnext',
      skipLibCheck: true,
    }),
    getBabelOutputPlugin({
      configFile: resolve(__dirname, '../../babel.config.js'),
    }),
    image(),
    copy({
      targets: [{ src: 'src/style', dest: 'dist' }],
    }),
  ],
}

const h5Config = {
  input: join(cwd, 'src/index.ts'),
  output: [
    {
      file: join(cwd, 'dist/h5.js'),
      format: 'cjs',
      sourcemap: true,
    },
    {
      sourcemap: true,
      format: 'esm',
      file: join(cwd, 'dist/h5.esm.js'),
    },
  ],
  external: ['@babel/runtime-corejs3', 'react', 'react-dom'],
  plugins: [
    commonjs({
      include: /\/node_modules\//,
    }),
    nodeResolve({
      extensions: ['.mjs', '.js', '.jsx', '.tsx', '.ts', '.vue'],
      mainFields: ['main:h5', 'browser', 'module', 'jsnext:main', 'main'],
      customResolveOptions: {
        moduleDirectories: ['node_modules'],
      },
    }),
    json(),
    typescript({
      tsconfig: resolve(__dirname, '../../tsconfig.json'),
      module: 'esnext',
      skipLibCheck: true,
    }),
    getBabelOutputPlugin({
      configFile: resolve(__dirname, '../../babel.config.js'),
    }),
    image(),
    styles(),
  ],
}

module.exports = [config, h5Config]
