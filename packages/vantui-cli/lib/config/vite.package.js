import { join } from 'path'
import { setBuildTarget } from '../common/index.js'
import { CWD, ES_DIR, getVantConfig, LIB_DIR } from '../common/constant.js'
export function getViteConfigForPackage(minify) {
  setBuildTarget('package')
  const { name } = getVantConfig()
  return {
    root: CWD,
    logLevel: 'silent',
    build: {
      lib: {
        name,
        entry: join(ES_DIR, 'index.js'),
        fileName: (format) => {
          const suffix = format === 'umd' ? '' : `.${format}`
          return minify ? `${name}${suffix}.min.js` : `${name}${suffix}.js`
        },
      },
      // terser has better compression than esbuild
      minify: minify ? 'terser' : false,
      rollupOptions: {
        external: [
          '@babel/runtime-corejs3',
          '@tarojs/taro',
          '@tarojs/runtime',
          '@tarojs/components',
          'react',
          'react-dom',
        ],
        output: {
          dir: LIB_DIR,
          exports: 'named',
          globals: {
            react: 'React',
            'react-dom': 'ReactDom',
            '@tarojs/taro': 'Taro',
            '@tarojs/runtime': 'Runtime',
            '@tarojs/components': 'Components',
          },
        },
      },
    },
  }
}
