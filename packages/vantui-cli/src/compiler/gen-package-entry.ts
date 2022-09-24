import { join } from 'path'
import fs from 'fs'
import { get } from 'lodash-es'
import {
  pascalize,
  getComponents,
  smartOutputFile,
  normalizePath,
} from '../common/index.js'
import { SRC_DIR, getVantConfig, CWD } from '../common/constant.js'

type PathResolver = (path: string) => string

function getPathByName(name: string, pathResolver?: PathResolver) {
  let path = join(SRC_DIR, name)
  if (pathResolver) {
    path = pathResolver(path)
  }
  return normalizePath(path)
}

function genImports(
  names: string[],
  pathResolver?: PathResolver,
  namedExport?: boolean,
  // @ts-ignore
  fileName: string,
): string {
  return names
    .map((name) => {
      const pascalName = pascalize(name)
      const importName = namedExport ? `{ ${pascalName} }` : pascalName
      const importPath = `${getPathByName(name, pathResolver)}/${fileName}`
      const sourceType =
        process.env['BABEL_MODULE'] === 'commonjs' ? 'lib' : 'es'
      const fullPath = join(CWD, sourceType, importPath)

      console.info(fs.existsSync(fullPath))

      if (fs.existsSync(fullPath)) {
        return `import ${importName} from '${importPath}';`
      } else return ''
    })
    .filter((item) => !!item)
    .join('\n')
}

function genExports(
  names: string[],
  pathResolver?: PathResolver,
  namedExport?: boolean,
  // @ts-ignore
  fileName: string,
): string {
  if (namedExport) {
    const exports = names
      .map((name) => `export * from '${getPathByName(name, pathResolver)}';`)
      .join('\n')

    return `
  ${exports}
`
  }

  return `
  export {
    ${names
      .map((name) => {
        const importPath = `${getPathByName(name, pathResolver)}/${fileName}`
        const sourceType =
          process.env['BABEL_MODULE'] === 'commonjs' ? 'lib' : 'es'
        const fullPath = join(CWD, sourceType, importPath)

        if (fs.existsSync(fullPath)) {
          return name
        } else return ''
      })
      .map(pascalize)
      .filter((item) => !!item)
      .join(',\n  ')}
  };
  `
}

export function genPackageEntry({
  outputPath,
  pathResolver,
  fileName,
}: {
  outputPath: string
  pathResolver?: PathResolver
  fileName: string
}) {
  const names = getComponents()
  const vantConfig = getVantConfig()

  const namedExport = get(vantConfig, 'build.namedExport', false)

  const content = `
${genImports(names, pathResolver, namedExport, fileName)}

${genExports(names, pathResolver, namedExport, fileName)}
`
  smartOutputFile(outputPath, content)
}
