/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const glob = require('glob')

glob(
  `${path.resolve(process.cwd(), './src/**/README.md')}`,
  function (err, path_) {
    path_.map((item) => {
      const componentName = item.split('/').reverse()[1]
      let content = fs
        .readFileSync(item, 'utf-8')
        .replace(/###\sTS信息[\s\S]+```$/, '')

      if (
        fs.existsSync(`../vantui/types/${componentName}.d.ts`) &&
        componentName !== 'index'
      ) {
        content +=
          `### TS信息` +
          '\n```ts \n' +
          fs.readFileSync(`../vantui/types/${componentName}.d.ts`, 'utf-8') +
          '```'
      }

      fs.writeFileSync(item, content)
    })
  },
)
