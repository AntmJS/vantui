import fs from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { watch } from 'chokidar'
import { CWD, getVantConfig } from '../common/constant.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const cwd = process.cwd()

type Item = {
  title: string
  items: Array<{
    title: string
    path: string
  }>
}

let watched = false

export default async function Create(mode?: 'production' | 'development') {
  if (mode === 'development' && !watched) {
    watched = true
    watchConfigFile()
  }
  let codeStr = `
    IMPORT
    (function(window) {
      window.__vantui_base__ = BASE
      BASEADDIONAL
    })(window)
  `
  const res = await getVantConfig(true)
  const config = res?.site
  let baseAddional = ''
  let import_ = ''
  const base = {
    outDir: config.outDir,
    title: config.title,
    logo: config.logo,
    simulator: config.simulator,
    links: config.links,
    nav: config.nav,
    routers: [],
    md: {} as Record<string, any>,
  }

  config.nav.map((item: Item) => {
    base.routers = base.routers.concat(item.items as any)
  })

  for (let i = 0; i < base.routers.length; i++) {
    const rou: any = base.routers[i]
    if (fs.existsSync(`${cwd}/src/${rou.path}/README.md`)) {
      import_ += `import ${resetPath(rou.path, true)} from "${cwd}/src/${
        rou.path
      }/README.md";\n`
    }

    if (fs.existsSync(`${cwd}/docs/${rou.path}.md`)) {
      import_ += `import ${resetPath(rou.path, true)} from "${cwd}/docs/${
        rou.path
      }.md"; \n`
    }

    baseAddional += `
     __vantui_base__.md["${rou.path}"] = ${resetPath(rou.path, true)}
    `
  }

  codeStr = codeStr
    .replace('BASE', JSON.stringify(base))
    .replace('BASEADDIONAL', baseAddional)
    .replace('IMPORT', import_)

  fs.writeFileSync(`${__dirname}/vant.base.js`, codeStr)

  return base
}

function resetPath(r: string, firstBig?: boolean) {
  let res = firstBig ? titleCase(r) : r
  if (r.includes('-')) {
    const arr: Array<string> = r.split('-')
    let resNew = ''
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        resNew += arr[i]
      } else {
        resNew += titleCase(arr[i] as string)
      }

      res = resNew
    }
  }

  return res
}

function titleCase(str: string) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
}

function watchConfigFile() {
  let readyOk = false
  const watcher = watch(join(CWD, './vant.config.js'), {
    persistent: true,
  })
  watcher.on('ready', function () {
    console.info('watch vant.config.js success')

    readyOk = true
  })
  watcher.on('change', function () {
    if (readyOk) {
      Create()
    }
  })
}
