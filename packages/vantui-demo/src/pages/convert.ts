import * as fs from 'fs'
import * as path from 'path'
export function getFiles(
  parentPath = path.resolve(__dirname, './../pages'),
): string[] {
  let fileList: string[] = []

  let files = []
  try {
    files = fs.readdirSync(parentPath)
  } catch (err) {
    throw new Error('文件夹不存在，请检查config配置')
  }

  files.forEach((item) => {
    item = path.join(parentPath, item)

    const stat = fs.statSync(item)
    try {
      if (stat.isDirectory()) {
        fileList = fileList.concat(getFiles(item))
      } else if (stat.isFile()) {
        fileList.push(item)
      }
    } catch (error) {
      // console.log(chalk.red(`rapper: Rap 接口引用扫描失败, ${error}`));
    }
  })
  return fileList
}
function promiseReadFile(
  path: string,
): Promise<{ content: string; path: string }> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve({
        content: data,
        path,
      })
    })
  })
}

async function getContent(filsNames: string[]) {
  const allFile = getFiles()
  // TODO: 没找到一步扫描本地 代码的 api
  const readAllFile = allFile.map(async (filePath) => {
    const fileReg = new RegExp(`(${filsNames.join('|')})\.js$`)
    if (fileReg.test(filePath)) {
      const result = await promiseReadFile(filePath)

      // console.log(result)
      // 检查合法性 -- 这东西会自动扩散 去解析导入类型的文件
      return result
    }
    return null
  })
  // console.log('文件', readAllFile.filter(file => file).length)
  const allSchemaContent = await Promise.all(readAllFile)
  return allSchemaContent.filter((file) => file)
}
function convert(fileContent: string): string {
  // 1. 先把  @withWeapp   弄出来

  let result = fileContent.replace(
    // @withWeapp({ data: {} })
    /@withWeapp\({((\s+data:\s+{)?[\s\S]+?),?\s+}\)\s+class\s+_C\s+extends\s+React\.Component\s+{/,
    (_: string, $1: string): any => {
      // 2. 把 data 改为 state
      let str = $1.replace(/data:/, 'state =')
      // 3.把 方法之间的 ， 去掉-
      str = str.replace(/(?<=}),(?=\s+\w+\(([{}\w,\s]+)?\)\s+{)/g, '')
      // 绑定类的this
      str = str.replace(/(\w+)\(([{}\w,\s]+)?\)\s+{/g, '$1 = ($2) => {')
      // 4. 把this.data this.setData 改了

      str = str.replace(/this\.setData/g, 'this.setState')
      return `export default class Index extends React.Component {
    constructor(){
      super()
    }
    ${str}
    `
    },
  )

  // import { Block, Image } from '@tarojs/components'

  result = result.replace(
    /import\s+{([A-Za-z,\s]+)}\s+from\s+'@tarojs\/components'/,
    (_str: string, $1: string): any => {
      return `import { ${$1.replace('Image', '')}} from '@tarojs/components'`
    },
  )
  result = result.replace(/this\.data/g, 'this.state')

  result = result.replace(/Van([A-Z]\w+)/g, '$1')

  result = result.replace(/export\s+default\s+_C/, '')

  const reg =
    /import\s+(?<com>[a-zA-Z]+)\s+from\s+'\.\.\/\.\.\/dist\/[\w\/-]+'\n/g

  const coms = (result.match(reg) ?? []).map((e) => e.replace(reg, '$1'))

  // Toast 特殊处理
  // import Toast from '../../dist/toast/toast.js'

  const toastReg = /import\s+Toast\s+from\s+'[\.\/]+dist[\w\/-]+\.js'/
  const toastResult = result.match(toastReg)

  if (toastResult) {
    coms.push('toast')
    result = result.replace(toastReg, '')
    result = result.replace(/(?<=\s+)Toast([(.])/g, 'toast$1')
  }
  // Dialog 处理
  const dialogReg = /import\s+Dialog\s+from\s+'[\.\/]+dist[\w\/-]+\.js'/
  result = result.replace(dialogReg, '')

  // import Notify from '../../dist/notify/notify.js'

  const notifyReg = /import\s+Notify\s+from\s+'[\.\/]+dist[\w\/-]+\.js'/
  const notifyResult = result.match(notifyReg)

  if (notifyResult) {
    coms.push('notify')
    result = result.replace(notifyReg, '')
    result = result.replace(/(?<=\s+)Notify([(.])/g, 'notify$1')
  }

  //   import withWeapp from '@tarojs/with-weapp'
  // import list from '../../config.js'
  // import Page from '../../common/page.js'

  result = result.replace(
    /import\s+withWeapp[\s\S]+\/common\/page\.js'/,
    `import { ${coms.join(',')}} from '@antmjs/vantui'\n`,
  )

  result = result.replace(reg, '')

  // 替换 customStyle customClass
  result = result.replace(
    /custom(Style|Class)=/,
    (_str: string, $1: string) => {
      return $1.slice(0, 1).toLowerCase() + $1.slice(1) + '='
    },
  )

  // 替换  ions

  // import icons from '../../dist/@vant/icons/src/config'
  const iconsReg =
    /import\s+([a-zA-Z]+)\s+from\s+'\.\.\/\.\.\/dist\/[\w\/-@]+config'\n/g
  result = result.replace(iconsReg, "import icons from '@vant/icons'\n")

  // 去掉标题
  result = result.replace(/(?<=(<\/|<))H(\d)/g, 'h$2')

  // onTap = onClick
  result = result.replace(/onTap={/g, 'onClick={')

  return result
}

function writeFile(
  dirName: string,
  e: {
    content: string
    path: string
  },
) {
  fs.writeFile(
    e.path.replace(/\/index_backup\.js$/, '/index.js'),
    convert(e.content),
    (err) => {
      if (err) {
        console.error(dirName + '写入失败', err)
      } else {
        console.log(dirName + '写入成功')
      }
    },
  )
}

// function unlink(
//   dirName: string,
//   e: {
//     content: string
//     path: string
//   },
// ) {
//   fs.unlink(e.path, (err) => {
//     if (err) {
//       console.error(dirName + '删除失败', err)
//     } else {
//       console.log(dirName + '删除成功')
//     }
//   })
// }

;(async () => {
  const filsNames = ['index_backup'] //['index', 'index2']
  const result = await getContent(filsNames)
  console.log('一共' + result.length + '')
  // console.log(result)
  if (result.length === 0) {
    console.log('没找到文件， 请检查文件名称')
    return
  }
  result.forEach((e) => {
    if (!e) return
    const dirName = e.path.match(/\/([\w-]+)\/\w+\.js$/)?.[1] || ''
    writeFile(dirName, e)
    //  unlink(dirName, e)
  })
})()
