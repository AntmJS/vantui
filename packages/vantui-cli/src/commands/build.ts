import { join, relative } from 'path'
// eslint-disable-next-line import/default
import fse from 'fs-extra'
import { CSS_LANG } from '../common/css.js'
import { ora, consola } from '../common/logger.js'
import { compileStyle } from '../compiler/compile-style.js'
import { compileScript } from '../compiler/compile-script.js'
import { genPackageEntry } from '../compiler/gen-package-entry.js'
import { genStyleDepsMap } from '../compiler/gen-style-deps-map.js'
import { genComponentStyle } from '../compiler/gen-component-style.js'
import { SRC_DIR, LIB_DIR, ES_DIR } from '../common/constant.js'
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
const esEntryFile = join(ES_DIR, 'index.js')
const libEntryFile = join(LIB_DIR, 'index.js')
const entries = [
  {
    es: esEntryFile,
    lib: libEntryFile,
    fileName: 'index.js',
  },
]

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
  const copys = [copy(SRC_DIR, ES_DIR), copy(SRC_DIR, LIB_DIR)]

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
  for (let i = 0; i < entries.length; i++) {
    const entryItem = entries[i]

    if (entryItem) {
      genPackageEntry({
        outputPath: entryItem.es,
        pathResolver: (path: string) => `./${relative(SRC_DIR, path)}`,
        fileName: entryItem.fileName,
      })

      await copy(entryItem.es, entryItem.lib)
    }
  }
}

async function buildPackageStyleEntry() {
  const styleEntryFile = join(LIB_DIR, `index.${CSS_LANG}`)

  genPackageStyle({
    outputPath: styleEntryFile,
    pathResolver: (path: string) => path.replace(SRC_DIR, '.'),
  })
}

const tasks = [
  {
    text: 'Copy Source Code',
    task: copySourceCode,
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
  {
    text: 'Build Package Script Entry',
    task: buildPackageScriptEntry,
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

export async function build(params: { addtionalEntries?: string }) {
  setNodeEnv('production')

  try {
    await clean()
    if (params.addtionalEntries) {
      params.addtionalEntries.split(',').map((item) => {
        const esEntryFile = join(ES_DIR, `${item}-index.js`)
        const libEntryFile = join(LIB_DIR, `${item}-index.js`)
        entries.push({
          es: esEntryFile,
          lib: libEntryFile,
          fileName: `${item}-index.js`,
        })
      })
    }
    await runBuildTasks()
  } catch (err) {
    consola.error('Build failed')
    process.exit(1)
  }
}
