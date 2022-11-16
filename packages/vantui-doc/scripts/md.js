const stylToMd = require('./style-to-md')
const typescriptToMd = require('./ts-to-md')

async function main() {
  await typescriptToMd()
  stylToMd()
}

main()
