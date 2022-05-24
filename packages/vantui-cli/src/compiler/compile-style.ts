import { parse } from 'path'
import { readFileSync, writeFileSync } from 'fs'
import { replaceExt } from '../common/index.js'
import { consola } from '../common/logger.js'
import { compileCss } from './compile-css.js'
import { compileLess } from './compile-less.js'
import { compileSass } from './compile-sass.js'

async function compileFile(filePath: string) {
  const parsedPath = parse(filePath)

  try {
    if (parsedPath.ext === '.less') {
      const source = await compileLess(filePath)
      return await compileCss(source)
    }

    if (parsedPath.ext === '.scss') {
      const source = await compileSass(filePath)
      return await compileCss(source)
    }

    const source = readFileSync(filePath, 'utf-8')
    return await compileCss(source)
  } catch (err) {
    consola.error('Compile style failed: ' + filePath)
    throw err
  }
}
/**
 *
 * @param filePath 读取路径和输出路径，有outputPath时仅为读取路径
 * @param outputPath
 */
export async function compileStyle(filePath: string, outputPath?: string) {
  const css = await compileFile(filePath)

  if (outputPath) {
    writeFileSync(
      replaceExt(outputPath || filePath, '.less'),
      readFileSync(filePath),
    )
  } else {
    writeFileSync(replaceExt(outputPath || filePath, '.css'), css)
  }
}
