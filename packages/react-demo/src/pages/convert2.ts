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
async function convert(fileContent: string, pathName: string) {
  // render() {
  //   return (
  //     )
  //   }
  // }
  const configPath = pathName.replace(/\/index\.js$/, '/index.config.js')
  const titleMatch = (await promiseReadFile(configPath)).content.match(
    /navigationBarTitleText:\s+'([\s\S]+)'/,
  )

  return (
    `import DemoPage from '../../components/demo-page/index'\n` +
    fileContent.replace(
      /(?<=render\(\)\s+\{[\s\S]+return\s+\()([\s\S]+)(?=\)\s+\}\s+\})/,
      `<DemoPage title="${(titleMatch ?? [])[1]}">$1</DemoPage>`,
    )
  )
}

async function writeFile(
  dirName: string,
  e: {
    content: string
    path: string
  },
) {
  const pathName = e.path.replace(/\/index_backup\.js$/, '/index.js')
  const data = await convert(e.content, pathName)
  fs.writeFile(pathName, data, (err) => {
    if (err) {
      console.error(dirName + '写入失败', err)
    } else {
      console.log(dirName + '写入成功')
    }
  })
}

function unlink(
  dirName: string,
  e: {
    content: string
    path: string
  },
) {
  fs.unlink(e.path, (err) => {
    if (err) {
      console.error(dirName + '删除失败', err)
    } else {
      console.log(dirName + '删除成功')
    }
  })
}

const isDelete = false // 1 删除  2 修改

;(async () => {
  const filsNames = ['index'] //['index', 'index2']
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

    if (isDelete) {
      unlink(dirName, e)
    } else {
      writeFile(dirName, e)
    }
  })
})()
