import { join, relative } from 'path'
import fse from 'fs-extra'
import { CSS_LANG } from '../common/css.js'
import { ora, consola } from '../common/logger.js'
import { compileStyle } from '../compiler/compile-style.js'
import { compileScript } from '../compiler/compile-script.js'
import { genPackageEntry } from '../compiler/gen-package-entry.js'
import { genStyleDepsMap } from '../compiler/gen-style-deps-map.js'
import { genComponentStyle } from '../compiler/gen-component-style.js'
import {
  SRC_DIR,
  LIB_DIR,
  ES_DIR,
  IGNORE_FILE_REG,
} from '../common/constant.js'
import { genPackageStyle } from '../compiler/gen-package-style.js'
import {
  isDir,
  isAsset,
  isStyle,
  isScript,
  setNodeEnv,
  setModuleEnv,
  setBuildTarget,
} from '../common/index.js'
import { clean } from './clean.js'
// eslint-disable-next-line import/no-named-as-default-member
const { remove, copy, readdir } = fse

async function compileFile(filePath: string) {
  if (isScript(filePath)) {
    return compileScript(filePath)
  }
  if (isStyle(filePath)) {
    return compileStyle(filePath)
  }
  if (isAsset(filePath)) {
    return Promise.resolve()
  }
  return remove(filePath)
}

async function compileDir(dir: string) {
  const files = await readdir(dir)
  await Promise.all(
    files.map((filename) => {
      const filePath = join(dir, filename)
      return isDir(filePath) ? compileDir(filePath) : compileFile(filePath)
    }),
  )
}

async function copySourceCode() {
  const opt = {
    filter: (sFile) => {
      for (let i = 0; i < IGNORE_FILE_REG.length; i++) {
        const reg = IGNORE_FILE_REG[i]
        if (reg?.test(sFile)) {
          return false
        }
      }

      return true
    },
  }
  const copys: any = [copy(SRC_DIR, ES_DIR, opt), copy(SRC_DIR, LIB_DIR, opt)]
  return Promise.all(copys)
}

async function buildESMOutputs() {
  setModuleEnv('esmodule')
  setBuildTarget('package')
  await compileDir(ES_DIR)
}

async function buildCJSOutputs() {
  setModuleEnv('commonjs')
  setBuildTarget('package')
  await compileDir(LIB_DIR)
}

async function buildStyleEntry() {
  await genStyleDepsMap()
  genComponentStyle()
}

async function buildPackageScriptEntry() {
  const esEntryFile = join(ES_DIR, 'index.js')
  const libEntryFile = join(LIB_DIR, 'index.js')

  genPackageEntry({
    outputPath: esEntryFile,
    pathResolver: (path: string) => `./${relative(SRC_DIR, path)}`,
  })

  await copy(esEntryFile, libEntryFile)
}

async function buildPackageStyleEntry() {
  const styleEntryFile_lib = join(LIB_DIR, `index.${CSS_LANG}`)
  const styleEntryFile_es = join(ES_DIR, `index.${CSS_LANG}`)

  genPackageStyle({
    outputPath: styleEntryFile_lib,
    pathResolver: (path: string) => path.replace(SRC_DIR, '.'),
  })

  await copy(styleEntryFile_lib, styleEntryFile_es)
}

const tasks = [
  {
    text: 'Copy Source Code',
    task: copySourceCode,
  },
  {
    text: 'Build Package Script Entry',
    task: buildPackageScriptEntry,
  },
  {
    text: 'Build Component Style Entry',
    task: buildStyleEntry,
  },
  {
    text: 'Build Package Style Entry',
    task: buildPackageStyleEntry,
  },
  {
    text: 'Build ESModule Outputs',
    task: buildESMOutputs,
  },
  {
    text: 'Build CommonJS Outputs',
    task: buildCJSOutputs,
  },
]

async function runBuildTasks() {
  const _tasks = tasks
  for (let i = 0; i < _tasks.length; i++) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { task, text } = _tasks[i]
    const spinner = ora(text).start()

    try {
      /* eslint-disable no-await-in-loop */
      await task()
      spinner.succeed(text)
    } catch (err) {
      spinner.fail(text)
      console.log(err)
      throw err
    }
  }

  consola.success('Compile successfully')
}

export async function build() {
  setNodeEnv('production')

  try {
    await clean()
    await runBuildTasks()
  } catch (err) {
    consola.error('Build failed')
    process.exit(1)
  }
}
