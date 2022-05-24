import fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { getVantConfig } from '../common/constant.js'
const __dirname = dirname(fileURLToPath(import.meta.url))
const cwd = process.cwd()
export default async function Create() {
  let codeStr = `
    IMPORT
    (function(window) {
      window.__vantui_base__ = BASE
      BASEADDIONAL
    })(window)
  `
  const res = await getVantConfig()
  const config = res === null || res === void 0 ? void 0 : res.site
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
    md: {},
  }
  config.nav.map((item) => {
    base.routers = base.routers.concat(item.items)
  })
  for (let i = 0; i < base.routers.length; i++) {
    const rou = base.routers[i]
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
function resetPath(r, firstBig) {
  let res = firstBig ? titleCase(r) : r
  if (r.includes('-')) {
    const arr = r.split('-')
    let resNew = ''
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        resNew += arr[i]
      } else {
        resNew += titleCase(arr[i])
      }
      res = resNew
    }
  }
  return res
}
function titleCase(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
}
