import { join } from 'path'
import { readFileSync } from 'fs'
import less from 'less'
import { CWD } from '../common/constant.js'

export async function compileLess(filePath: string) {
  const source = readFileSync(filePath, 'utf-8')
  const { css } = await less.render(source, {
    filename: filePath,
    paths: [join(CWD, 'node_modules')],
  })

  return css
}
