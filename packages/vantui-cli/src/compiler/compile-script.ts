/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/default */
import { sep } from 'path'
import fse from 'fs-extra'
import { transformAsync } from '@babel/core'
import { replaceExt } from '../common/index.js'
import { replaceCSSImportExt } from '../common/css.js'
import { replaceScriptImportExt } from './get-deps.js'

// eslint-disable-next-line import/no-named-as-default-member
const { readFileSync, removeSync, outputFileSync } = fse
/**
 *
 * @param filePath 读取路径和输出路径，有outputPath时仅为读取路径
 * @param outputPath
 */
export async function compileScript(
  filePath: string,
  outputPath?: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (filePath.includes('.d.ts')) {
      resolve()
      return
    }

    let code = readFileSync(filePath, 'utf-8')

    if (!filePath.includes(`${sep}style${sep}`)) {
      code = replaceCSSImportExt(code)
    }
    code = replaceScriptImportExt(code, '.vue', '')

    transformAsync(code, {
      filename: filePath,
      presets: [
        [
          '@antmjs/babel-preset',
          {
            presets: {
              env: {
                debug: false,

                /**
                 * false: 不处理polyfill，自己手动引入【全量】
                 * usage: 按需加载 polyfill，且不需要手动引入【按需】
                 * entry: 必须手动引入，但会根据设置的目标环境全量导入【按环境全量】
                 * 注：在 Babel 7.4.0 之后的版本，Babel官方明确建议了不再使用 @babel/polyfill ，建议使用 core-js/stable 和 regenerator-runtime/runtime。本包已经安装了core-js、@babel/plugin-transform-runtime和@babel/runtime，所以选择false或者entry选项的只需要在主文件顶部引入core-js即可
                 */
                useBuiltIns: false,
                modules:
                  // @ts-ignore
                  process.env.BABEL_MODULE === 'commonjs' ? 'commonjs' : false, // 对es6的模块文件不做转译，以便使用tree shaking、sideEffects等
              },
              react: {
                runtime: 'automatic',
              },
              typescript: {
                isTSX: true,
                jsxPragma: 'React',
                allExtensions: true,
                allowNamespaces: true,
              },
            },
            runtime: {
              absoluteRuntime: false,
              corejs: { version: 3, proposals: false },
              helpers: true, // 使用到@babel/runtime
              regenerator: true, // 使用到@babel/runtime
              useESModules: false,
            },
          },
        ],
      ],
    })
      .then((result: any) => {
        if (result) {
          const jsFilePath = replaceExt(outputPath || filePath, '.js')
          // watch的时候不删除目标
          if (!outputPath) removeSync(filePath)
          outputFileSync(jsFilePath, result.code)
          resolve()
        }
      })
      .catch(reject)
  })
}
