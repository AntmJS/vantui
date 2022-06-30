/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-template-curly-in-string */
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
// eslint-disable-next-line import/no-named-as-default
import glob from 'glob'
import { watch } from 'chokidar'
import markdownToAst from 'markdown-to-ast'
import { format } from 'prettier'
import { SRC_DIR, getVantConfig } from '../common/constant.js'
import { ora, consola } from '../common/logger.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pages: Record<string, { title: string; path: string }> = {}
let DEFAULT_PAGE_PATH = join(__dirname, `../../site/simulator/src/pages`)
let simulatorConfig: any = {}
const fromTaroComps = ['View', 'Text', 'Input', 'Block']
let CACHE: Record<string, any> = {}
const CACHE_URL = join(__dirname, '../../.cache/mdcode.json')

type IMdCodeParams = {
  mode: 'create' | 'watch'
}

export async function mdCode(params: IMdCodeParams) {
  const { mode } = params
  const spinner = ora(`Compile md-code and sync to simulator...`).start()
  const res = await getVantConfig()
  simulatorConfig = res.site?.simulator
  if (res.site?.simulator?.pagePath) {
    DEFAULT_PAGE_PATH = res.site.simulator.pagePath
  }
  await initCache()
  createBaseFiles(res)
  glob(`${SRC_DIR}/**/README.md`, async function (err, path: string[]) {
    if (err) {
      spinner.stop()
      consola.error(err)
      process.exit(1)
    }
    for (let i = 0; i < path.length; i++) {
      // @ts-ignore
      const pat: string = path[i]
      const { codeArr, commonUtils } = getCode(pat)
      const pArr = pat.split('/')
      const name = pArr[pArr.length - 2]
      if (commonUtils && commonUtils.length) {
        await createPageCommonUtils(
          commonUtils,
          `${DEFAULT_PAGE_PATH}/${name}/common.js`,
        )
      }
      await createPageComponent(codeArr, name)
    }

    spinner.stop()
    spinner.succeed('Compile success')
    await saveCache()

    if (mode === 'watch') {
      consola.info(`
        🐒 Watching for md file changes...
        `)
      watchMd()
    }
  })
}

process.on('SIGINT', () => {
  saveCache()
})

function watchMd() {
  let readyOk = false
  const watcher = watch(`${SRC_DIR}/**/README.md`, {
    persistent: true,
  })
  watcher.on('ready', function () {
    readyOk = true
  })
  watcher.on('add', function (path: string) {
    if (readyOk) {
      const { codeArr, commonUtils } = getCode(path)
      const pArr = path.split('/')
      const name = pArr[pArr.length - 2]
      createPageCommonUtils(
        commonUtils,
        `${DEFAULT_PAGE_PATH}/${name}/common.js`,
      )
      createPageComponent(codeArr, name)
    }
  })
  watcher.on('change', function (path: string) {
    if (readyOk) {
      const { codeArr, commonUtils } = getCode(path)
      const pArr = path.split('/')
      const name = pArr[pArr.length - 2]
      createPageCommonUtils(
        commonUtils,
        `${DEFAULT_PAGE_PATH}/${name}/common.js`,
      )
      createPageComponent(codeArr, name)
    }
  })
}

type IcodeItem = {
  importFromJsx: any
  value: string
  demoTitle: string
}

async function createPageCommonUtils(
  utilsArr: { value: string; import?: string[] }[],
  targetPath: string,
) {
  let preImportStr = ''
  let utilsStr = ''
  utilsArr.forEach((item) => {
    utilsStr += `${item.value}\n`
      // @ts-ignore
      .replace('function', 'export function')
      .replace('const', 'export const')
    if (item.import && item.import.length) {
      preImportStr = createImportStr(item.import)
    }
  })
  if (preImportStr) preImportStr = `import react from "react"\n` + preImportStr

  if (utilsStr) {
    await fs.writeFileSync(
      targetPath,
      formatCode(
        `/* eslint-disable */
    ` +
          preImportStr +
          utilsStr,
      ),
    )
  }
}

async function createPageComponent(codeRes: IcodeItem[], name?: string) {
  if (!name) return
  const spinner = ora(`update...`).start()
  let pageIndexImport = ''
  let pageIndexJsxInsert = ''
  let pageIndexJsxPush = ''

  for (let i = 0; i < codeRes.length; i++) {
    const item = codeRes[i] as IcodeItem
    const index = i

    const compName = toFirstBigStr(`demo${index + 1}`)
    pageIndexImport += `import ${compName} from './demo${index + 1}'\n`
    let padding = 'padding'
    if (['goods-action', 'tab'].includes(name || '')) padding = ''
    if (
      simulatorConfig.withTabPages &&
      simulatorConfig.withTabPages.includes(name)
    ) {
      pageIndexJsxInsert += `
        <Tab title="${item.demoTitle}" />
        `
      pageIndexJsxPush += `
        {this.state.active === ${index} ? <${compName} /> : ''}
      `
    } else {
      pageIndexJsxInsert += `
        <DemoBlock title="${item.demoTitle}" ${padding}>
          <${compName} />
        </DemoBlock>
        `
    }

    const commonUtilsImport = item.value.includes('COMMON')
      ? 'import * as COMMON  from "./common.js" '
      : ''

    const demoPath = `/${name}/demo${index + 1}.js`
    const demoCode = formatCode(
      `
        /* eslint-disable */
          import react from 'react';
          ${createImportStr(item.importFromJsx)}
          ${commonUtilsImport}
          ${item.value}
        `.replace(`function Demo`, 'export default function Demo'),
    )

    if (!CACHE[name] || CACHE[name][demoPath] !== demoCode) {
      await fs.writeFileSync(join(DEFAULT_PAGE_PATH, demoPath), demoCode)
      if (!CACHE[name]) CACHE[name] = {}
      CACHE[name][demoPath] = demoCode
    }
  }

  if (pageIndexJsxInsert && name) {
    await createPageIndex({
      targetPath: name,
      pageTile: pages[name]?.title,
      importStr: pageIndexImport,
      jsxStr: pageIndexJsxInsert,
      pageIndexJsxPush: pageIndexJsxPush,
    })
  }
  spinner.succeed(`mdcode sync ${name} success`)
}

type Iresult = {
  codeArr: IcodeItem[]
  commonUtils: { value: string }[]
}

function getCode(targetPath: string): Iresult {
  const res = fs.readFileSync(targetPath, 'utf-8')
  const children = markdownToAst.parse(res).children
  const commonUtils: { value: string; import?: string[] }[] = []
  const codeArr = children
    .map((item: any, index: number) => {
      if (
        item.type === 'CodeBlock' &&
        (item.lang === 'js common' || item.lang === 'jsx common')
      ) {
        // 收集公共方法变量
        commonUtils.push({
          value: item.value,
          import:
            item.lang === 'jsx common'
              ? findImportFromJsx(item.value)
              : undefined,
        })
      }
      if (
        item.type === 'CodeBlock' &&
        item.lang === 'jsx' &&
        item.value.includes('function Demo()')
      ) {
        // 查询demo标题
        let demoTitle = ''
        for (let i = index; i > 0; i--) {
          if (children[i].type === 'Header') {
            demoTitle = children[i].raw.replace('### ', '')
            break
          }
        }

        return {
          ...item,
          demoTitle: demoTitle,
        }
      }

      return item
    })
    .filter((item: any) => {
      return (
        item.type === 'CodeBlock' &&
        item.lang === 'jsx' &&
        item.value.includes('function Demo()')
      )
    })
    .map((item: any) => {
      return {
        value: item.value,
        importFromJsx: findImportFromJsx(item.value),
        demoTitle: item.demoTitle,
      }
    })

  return {
    codeArr,
    commonUtils,
  }
}

type InavItem = {
  title: string
  path: string
}
type Inav = {
  title: string
  items: InavItem[]
}
// 创建路由菜单文件
async function createBaseFiles(res: any) {
  const nav = res.site.nav
  let routers: InavItem[] = []
  const simulatorDefaultMenuConfigPath = join(
    __dirname,
    '../../site/simulator/src/config.json',
  )
  const simulatorDefaultRouterConfigPath = join(
    __dirname,
    '../../site/simulator/src/app.config.js',
  )
  const menuConfigPath =
    res.site.simulator?.configPath || simulatorDefaultMenuConfigPath
  const routerConfigPath =
    res.site.simulator?.appConfigPath || simulatorDefaultRouterConfigPath

  const navFilter = nav.filter((item: Inav) => {
    let flag = true
    item.items.forEach((item: any) => {
      if (item.hideSimulator !== undefined) {
        flag = false
      }
    })

    return flag
  })

  fs.writeFileSync(menuConfigPath, JSON.stringify(navFilter))
  navFilter.map((item: Inav) => {
    routers = routers.concat(item.items)
  })

  const routerTemplateStr = `export default {
    pages: [
      'pages/dashboard/index',ROUTER_PLACEHOLDER
    ],
    window: {
      navigationBarBackgroundColor: '#f8f8f8',
      navigationBarTitleText: 'antmjs-vantui',
      navigationBarTextStyle: 'black',
      backgroundTextStyle: 'dark',
      backgroundColor: '#f8f8f8',
      titleBarColor: 'black',
    },
    sitemapLocation: 'sitemap.json',
    animation: false,
  }
  `

  let insertStr = ''
  routers.forEach((rou) => {
    pages[rou.path] = rou
    insertStr += `\n'pages/${rou.path}/index',`
    createPageIndex({
      targetPath: rou.path,
      pageTile: rou.title,
    })
  })

  await fs.writeFileSync(
    routerConfigPath,
    formatCode(routerTemplateStr.replace('ROUTER_PLACEHOLDER', insertStr)),
  )
}

function formatCode(codes: string) {
  let res = codes
  try {
    res = format(codes, {
      singleQuote: true,
      trailingComma: 'all',
      semi: false,
      parser: 'babel',
    })
    return res
  } catch (err) {
    if (err) consola.error(`formatCode err: ${err}`)
    return res
  }
}

type IpageParams = {
  importStr?: string
  jsxStr?: string
  pageTile?: string
  targetPath?: string
  pageIndexJsxPush?: string
}

// 创建组件入口文件
async function createPageIndex(props: IpageParams) {
  const {
    pageTile = '',
    jsxStr = '等待同步...',
    importStr = '',
    targetPath = '',
    pageIndexJsxPush,
  } = props
  const target = join(DEFAULT_PAGE_PATH, `/${targetPath}`)
  let lastJsx = `
  <DemoPage title="${pageTile}" className="pages-${targetPath}-index">
    ${jsxStr}
  </DemoPage>
  `
  let importStrAdd = ''
  if (
    simulatorConfig.withTabPages &&
    simulatorConfig.withTabPages.includes(targetPath)
  ) {
    lastJsx = `
    <DemoPage title="${pageTile}" className="pages-${targetPath}-index">
      <Tabs active={this.state.avtive} onChange={e => this.setState({ active: e.detail.index })}>
      ${jsxStr}
      </Tabs>
      ${pageIndexJsxPush}
    </DemoPage>
    `
    importStrAdd += `import { Tab, Tabs } from '@antmjs/vantui'`
  }
  const page = `
  /* eslint-disable */
  ${importStrAdd}
  import { Component } from 'react'
  import DemoPage from '../../components/demo-page/index'
  import DemoBlock from '../../components/demo-block/index'
  ${importStr}
  export default class Index extends Component {
    constructor() {
      super()
    }
    state = { active: 0 }

    render() {
      return (
        ${lastJsx}
      )
    }
  }
  `
  const config = `export default {
    navigationBarTitleText: '${pageTile}',
    enableShareAppMessage: true,
  }
  `

  if (!fs.existsSync(target)) {
    fs.mkdirSync(target)
  }

  await fs.writeFileSync(`${target}/index.js`, formatCode(page))
  await fs.writeFileSync(`${target}/index.config.js`, formatCode(config))
}

function createImportStr(arr: string[]) {
  let str = ''
  let taroComps = ''
  let selfComps = ''

  arr.forEach((item: string) => {
    if (fromTaroComps.includes(item)) {
      taroComps += `${item},`
    } else {
      selfComps += `${item},`
    }
  })

  if (!!taroComps) str += `import { ${taroComps} } from '@tarojs/components'\n`
  if (!!selfComps) str += `import { ${selfComps} } from '@antmjs/vantui'`

  return str
}

function toFirstBigStr(str: string) {
  return str.substring(0, 1).toLocaleUpperCase() + str.substring(1)
}

function findImportFromJsx(ss: string): string[] {
  const res: string[] = (ss.match(/<[A-Za-z]{3,20}/g) || []).map(
    (item: string) => item.replace('<', ''),
  )

  // 过滤重复且自定义组件 如： DatetimePickerBox_
  return res.filter(
    (a: string, index: number) => res.indexOf(a) === index && !a.includes('_'),
  )
}

async function saveCache() {
  const _cacheDir = join(__dirname, '../../.cache')
  if (!fs.existsSync(_cacheDir)) {
    await fs.mkdirSync(_cacheDir)
  }
  await fs.writeFileSync(CACHE_URL, JSON.stringify(CACHE))
}

async function initCache() {
  if (fs.existsSync(CACHE_URL)) {
    const res = await fs.readFileSync(CACHE_URL, 'utf-8')
    CACHE = JSON.parse(res)
  }
}
