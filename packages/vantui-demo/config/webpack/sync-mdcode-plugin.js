/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { join } = path
const fs = require('fs')
const { spawn } = require('child_process')
const ora = require('ora')
const consola = require('consola')
const { glob } = require('glob')
const { watch } = require('chokidar')
const markdownToAst = require('markdown-to-ast')
const { format } = require('prettier')

const pages = {}
const vantuiDemoDir = path.resolve(__dirname, '../../..')
const pagePath = path.join(__dirname, '../../src/pages')
const configPath = path.join(__dirname, '../../src/config.json')
const appConfigPath = path.join(__dirname, '../../src/app.config.js')
const withTabPages = ['icon', 'power-scroll-view', 'infinite-scroll'] // 需要tab切换展示的组件
const markdownCodeSrc = path.join(vantuiDemoDir, '/vantui/src')

const vantConfigPathTs = path.join(vantuiDemoDir, './vantui/antm.config.ts')
const vantConfigPath = path.join(vantuiDemoDir, './vantui/antm.config.js')
const fromTaroComps = ['View', 'Text', 'Input', 'Block', 'TaroImage']
let pluginOptions = {}

module.exports = function (ctx, options) {
  pluginOptions = options

  ctx.onBuildStart(async () => {
    await transformConfig()
    await beginWork()
  })
}

async function transformConfig() {
  const cp = spawn(`npx`, [
    'tsc',
    vantConfigPathTs,
    '--resolveJsonModule',
    '--esModuleInterop',
    '--module',
    'commonjs',
    '--target',
    'es5',
  ])

  return new Promise((resolve) => {
    cp.on('close', () => {
      resolve()
    })
  })
}

async function beginWork() {
  const { watch } = pluginOptions
  const spinner = ora(`文档代码同步到vantui-demo`).start()

  await createBaseFiles()

  return new Promise(async (resolve) => {
    try {
      const jsfiles = await glob(`${markdownCodeSrc}/**/README.md`)
      for (let i = 0; i < jsfiles.length; i++) {
        const pat = jsfiles[i]
        const { codeArr, commonUtils } = getCode(pat)
        const pArr = pat.split('/')
        const name = pArr[pArr.length - 2]
        if (commonUtils && commonUtils.length) {
          if (!fs.existsSync(`${pagePath}/${name}`)) {
            fs.mkdirSync(`${pagePath}/${name}`)
          }

          // 创建common.js公共方法，mdcode中有COMMON标记
          await createPageCommonUtils(
            commonUtils,
            `${pagePath}/${name}/common.js`,
          )
        }
        await createPageComponent(codeArr, name)
      }

      spinner.stop()
      spinner.succeed('Compile success')

      if (watch) {
        consola.info(`
          🐒 Watching for md file changes...
          `)
        watchVantConfig()
        watchMd()
      }

      resolve()
    } catch (error) {
      spinner.stop()
      consola.error(error)
      process.exit(1)
    }
  })
}

function getCode(targetPath) {
  const res = fs.readFileSync(targetPath, 'utf-8')
  const children = markdownToAst.parse(res).children
  const commonUtils = []
  const codeArr = children
    .map((item, index) => {
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
    .filter((item) => {
      return (
        item.type === 'CodeBlock' &&
        item.lang === 'jsx' &&
        item.value.includes('function Demo()')
      )
    })
    .map((item) => {
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

// 创建路由菜单文件和路由文件
async function createBaseFiles() {
  const vantConfig = require(vantConfigPath)
  const nav = vantConfig.default.docs.menu
  const noMateUrls = vantConfig.default.docs.simulator.noMate.urls
  let routers = []

  const navFilter = nav.map((item) => {
    item.items.forEach((item) => {
      return !noMateUrls.includes(item.path)
    })

    return item
  })
  // 菜单写入
  fs.writeFileSync(configPath, JSON.stringify(navFilter))
  navFilter.map((item) => {
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
    appConfigPath,
    formatCode(routerTemplateStr.replace('ROUTER_PLACEHOLDER', insertStr)),
  )
}

// 创建组件入口文件
async function createPageIndex(props) {
  const {
    pageTile = '',
    jsxStr = '等待同步...',
    importStr = '',
    targetPath = '',
    pageIndexJsxPush,
  } = props
  const target = join(pagePath, `/${targetPath}`)
  let lastJsx = `
  <DemoPage title="${pageTile}" className="pages-${targetPath}-index">
    ${jsxStr}
  </DemoPage>
  `
  let importStrAdd = ''
  if (withTabPages && withTabPages.includes(targetPath)) {
    lastJsx = `
    <DemoPage title="${pageTile}" className="pages-${targetPath}-index">
      <Tabs active={this.state.avtive} onChange={e => this.setState({ active: e.detail.index })} sticky={true}>
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

async function createPageCommonUtils(utilsArr, targetPath) {
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

async function createPageComponent(codeRes, name) {
  if (!name) return
  const spinner = ora(`update...`).start()
  let pageIndexImport = ''
  let pageIndexJsxInsert = ''
  let pageIndexJsxPush = ''

  if (!fs.existsSync(join(pagePath, name))) fs.mkdirSync(join(pagePath, name))

  for (let i = 0; i < codeRes.length; i++) {
    const item = codeRes[i]
    const index = i

    const compName = toFirstBigStr(`demo${index + 1}`)
    pageIndexImport += `import ${compName} from './demo${index + 1}'\n`
    let padding = 'padding'
    if (['goods-action', 'tab'].includes(name || '')) padding = ''
    if (withTabPages && withTabPages.includes(name)) {
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

    await fs.writeFileSync(join(pagePath, demoPath), demoCode)
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

function watchMd() {
  let readyOk = false
  const watcher = watch(`${markdownCodeSrc}/**/README.md`, {
    persistent: true,
  })

  watcher.on('ready', function () {
    readyOk = true
  })

  watcher.on('add', function (path) {
    if (readyOk) {
      const { codeArr, commonUtils } = getCode(path)
      const pArr = path.split('/')
      const name = pArr[pArr.length - 2]
      createPageCommonUtils(commonUtils, `${pagePath}/${name}/common.js`)
      createPageComponent(codeArr, name)
    }
  })

  watcher.on('change', function (path) {
    if (readyOk) {
      const { codeArr, commonUtils } = getCode(path)
      const pArr = path.split('/')
      const name = pArr[pArr.length - 2]
      createPageCommonUtils(commonUtils, `${pagePath}/${name}/common.js`)
      createPageComponent(codeArr, name)
    }
  })
}

function watchVantConfig() {
  let readyOk = false
  const watcher = watch(vantConfigPath, {
    persistent: true,
  })

  watcher.on('ready', function () {
    readyOk = true
  })

  watcher.on('change', function () {
    if (readyOk) {
      createBaseFiles()
    }
  })
}

function toFirstBigStr(str) {
  if (str.includes('.')) {
    str = str.split('.')[0]
  }
  return str.substring(0, 1).toLocaleUpperCase() + str.substring(1)
}

function findImportFromJsx(ss) {
  const res = (ss.match(/<[A-Za-z]{3,20}/g) || []).map((item) =>
    item.replace('<', ''),
  )

  // 过滤重复且自定义组件 如： DatetimePickerBox_
  return res.filter((a, index) => res.indexOf(a) === index && !a.includes('_'))
}

function createImportStr(arr) {
  let str = ''
  let taroComps = ''
  let selfComps = ''

  arr.forEach((item) => {
    if (fromTaroComps.includes(item)) {
      if (item === 'TaroImage') {
        taroComps += `Image as ${item},`
      } else taroComps += `${item},`
    } else {
      selfComps += `${item},`
    }
  })

  if (!!taroComps) str += `import { ${taroComps} } from '@tarojs/components'\n`
  if (!!selfComps) str += `import { ${selfComps} } from '@antmjs/vantui'`

  return str
}

function formatCode(codes) {
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
