/* eslint-disable import/no-named-as-default-member */
import { mkdirSync } from 'fs'
import { remove } from 'fs-extra'
// eslint-disable-next-line import/default
import chokidar from 'chokidar'
import { SRC_DIR, LIB_DIR, ES_DIR } from '../common/constant.js'
import {
  setNodeEnv,
  isScript,
  isStyle,
  setModuleEnv,
  setBuildTarget,
} from '../common/index.js'
import { ora, consola } from '../common/logger.js'
import { compileStyle } from '../compiler/compile-style.js'
import { compileScript } from '../compiler/compile-script.js'
import { build } from './build.js'

async function compileFile(params: {
  fileName: string
  DIR: string
  path: string
}) {
  const { fileName } = params
  if (isScript(fileName)) {
    await compileScript(params.path, params.DIR)
  }
  if (isStyle(fileName)) {
    await compileStyle(params.path, params.DIR)
  }
}

async function changeOrAddAction(path: any, type: 'lib' | 'es') {
  const spinner = ora('updating...').start()
  const pathArr = path.split('/').reverse()
  const fileName = pathArr[0]
  const DIR = path.replace(SRC_DIR, type === 'lib' ? LIB_DIR : ES_DIR)
  try {
    await compileFile({
      fileName,
      DIR,
      path,
    })
    spinner.stop()
    consola.success('Update successfully')
  } catch (err) {
    spinner.stop()
    consola.success('Update failed')
    consola.error(err)
  }
}

function watchFile(type: 'lib' | 'es') {
  let readyOk = false
  const watcher = chokidar.watch(`${SRC_DIR}/`, {
    persistent: true,
  })

  watcher.on('ready', function () {
    readyOk = true
  })

  watcher.on('add', function (path: string) {
    if (readyOk) {
      changeOrAddAction(path, type)
    }
  })

  watcher.on('change', function (path: string) {
    if (readyOk) {
      changeOrAddAction(path, type)
    }
  })

  watcher.on('addDir', function (path: string) {
    if (readyOk) {
      const spinner = ora('updating...').start()
      const addTarget = path.replace(SRC_DIR, type === 'lib' ? LIB_DIR : ES_DIR)
      mkdirSync(addTarget)
      spinner.stop()
      consola.success('Update successfully')
    }
  })

  watcher.on('unlinkDir', function (path: string) {
    if (readyOk) {
      const spinner = ora('updating...').start()
      const deleteTarget = path.replace(
        SRC_DIR,
        type === 'lib' ? LIB_DIR : ES_DIR,
      )
      remove(deleteTarget)
      spinner.stop()
      consola.success('Update successfully')
    }
  })

  watcher.on('unlink', function (path: string) {
    if (readyOk) {
      const spinner = ora('updating...').start()
      const deleteTarget = path.replace(
        SRC_DIR,
        type === 'lib' ? LIB_DIR : ES_DIR,
      )
      remove(deleteTarget)
      spinner.stop()
      consola.success('Update successfully')
    }
  })
}

export async function watch(params: { type?: 'es' | 'lib' }) {
  const type = params.type || 'es'
  setNodeEnv('development')
  setBuildTarget('package')
  if (type === 'es') {
    setModuleEnv('esmodule')
  } else if (type === 'lib') {
    setModuleEnv('commonjs')
  }
  await build({ type })

  consola.log(`
  watching files update
`)
  watchFile(type)
}
